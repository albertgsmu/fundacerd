const TESTIMONIALS_SHEET_NAME = 'Testimonios';
const TESTIMONIALS_HEADERS = ['Fecha', 'Nombre', 'Vínculo', 'Opinión'];
const TESTIMONIALS_PUBLIC_LIMIT = 30;
const TESTIMONIALS_ALLOWED_ROLES = new Set([
  'Participante',
  'Familiar',
  'Voluntario/a',
  'Entrenador/a',
  'Aliado/a',
  'Otro',
]);

function doGet(event) {
  const callback = String(event?.parameter?.callback || '');
  if (!/^fundarcedTestimonialsCallback\d+$/.test(callback)) {
    return jsonOutput_({ ok: false, error: 'Solicitud no válida.' });
  }

  try {
    const sheet = getTestimonialsSheet_();
    const lastRow = sheet.getLastRow();
    const testimonials = lastRow < 2
      ? []
      : sheet.getRange(2, 1, lastRow - 1, TESTIMONIALS_HEADERS.length)
        .getValues()
        .reverse()
        .slice(0, TESTIMONIALS_PUBLIC_LIMIT)
        .map(([date, name, role, message]) => ({
          date: date instanceof Date ? date.toISOString() : String(date),
          name: String(name),
          role: String(role),
          message: String(message),
        }));

    return ContentService
      .createTextOutput(`${callback}(${JSON.stringify({ ok: true, testimonials })});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } catch (error) {
    return ContentService
      .createTextOutput(`${callback}(${JSON.stringify({ ok: false, testimonials: [] })});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}

function doPost(event) {
  try {
    const data = JSON.parse(event?.postData?.contents || '{}');

    // Campo trampa para descartar envíos automáticos.
    if (String(data.website || '').trim()) {
      return jsonOutput_({ ok: true });
    }

    const name = String(data.name || '').trim().slice(0, 60);
    const role = String(data.role || '').trim();
    const message = String(data.message || '').trim().slice(0, 500);
    if (!name || !TESTIMONIALS_ALLOWED_ROLES.has(role) || message.length < 10 || data.consent !== true) {
      return jsonOutput_({ ok: false, error: 'Revisa los datos y la autorización.' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      getTestimonialsSheet_().appendRow([new Date(), name, role, message]);
    } finally {
      lock.releaseLock();
    }

    return jsonOutput_({ ok: true });
  } catch (error) {
    return jsonOutput_({ ok: false, error: 'No se pudo guardar la opinión.' });
  }
}

function getTestimonialsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error('Vincula este script a una hoja de cálculo de Google.');
  }

  let sheet = spreadsheet.getSheetByName(TESTIMONIALS_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(TESTIMONIALS_SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(TESTIMONIALS_HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonOutput_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
