const introScreen = document.getElementById('intro-screen');

const hideIntroScreen = () => {
  if (!introScreen) {
    return;
  }

  introScreen.classList.add('is-hidden');
  window.setTimeout(() => introScreen.remove(), 600);
};

const scheduleIntroScreenDismissal = () => window.setTimeout(hideIntroScreen, 900);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleIntroScreenDismissal, { once: true });
} else {
  scheduleIntroScreenDismissal();
}

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const aboutCarousel = document.querySelector('[data-about-carousel]');
if (aboutCarousel) {
  const slides = [...aboutCarousel.querySelectorAll('.about-slide')];
  const count = aboutCarousel.querySelector('[data-about-count]');
  const progress = aboutCarousel.querySelector('.about-carousel-progress');
  const progressFill = aboutCarousel.querySelector('[data-about-progress]');
  const previous = aboutCarousel.querySelector('[data-about-prev]');
  const next = aboutCarousel.querySelector('[data-about-next]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeSlide = 0;
  let autoplay;
  const usedCaptions = new Set(slides.map((slide) => slide.querySelector('figcaption strong')?.textContent.trim().toLocaleLowerCase()).filter(Boolean));
  const captionStarts = new Set(slides.map((slide) => slide.querySelector('figcaption strong')?.textContent.trim().toLocaleLowerCase().split(/\s+/).slice(0, 3).join(' ')).filter(Boolean));
  const captionOpeners = [
    'Desde nuestro barrio,', 'En cada encuentro,', 'Con sueños grandes,', 'A través del deporte,',
    'Con talento y entrega,', 'Para crecer juntos,', 'En comunidad,', 'Con pasión y disciplina,',
    'Cada día,', 'Desde la cancha,', 'Con esfuerzo compartido,', 'Al aprender juntos,',
    'Con alegría,', 'En equipo,', 'Con nuevas metas,', 'A paso firme,',
    'Con el corazón,', 'Desde FUNDARCED,', 'Entre amigos,', 'Con compromiso,',
    'En cada historia,', 'Con esperanza,', 'Con creatividad,', 'En este camino,',
    'Con energía,', 'Al compartir,', 'Desde nuestras raíces,', 'Con valentía,',
    'En cada práctica,', 'Con respeto,', 'Desde la infancia,', 'Con ilusión,',
    'Al expresarnos,', 'Con dedicación,', 'En cada juego,', 'Con perseverancia,',
    'Juntos,', 'Con nuevas ideas,', 'Desde el territorio,', 'Con sueños en marcha,',
    'En cada paso,', 'Con confianza,', 'Al crear,', 'Con solidaridad,',
    'En nuestra comunidad,', 'Con espíritu de equipo,', 'Desde el primer día,', 'Con mucho entusiasmo,',
    'Al compartir talentos,', 'Con propósito,', 'En movimiento,', 'Con ganas de aprender,',
    'Desde la cultura,', 'Con sueños por cumplir,', 'En cada oportunidad,', 'Con unión,',
    'Al superar retos,', 'Con orgullo,', 'Desde el juego,', 'Con una meta común,',
    'En este proceso,', 'Con alegría y unión,', 'Desde la experiencia,', 'Con dedicación diaria,',
    'Al construir futuro,', 'Con iniciativa,', 'En cada celebración,', 'Con valores,',
    'Desde el trabajo colectivo,', 'Con esperanza renovada,', 'Al abrir caminos,', 'Con identidad,',
    'En cada actividad,', 'Con espíritu creativo,', 'Desde el encuentro,', 'Con actitud positiva,',
    'Al descubrir talentos,', 'Con sentido de pertenencia,', 'En nuestra cancha,', 'Con constancia,',
  ];
  const captionEndings = {
    talento: 'el talento crece con disciplina y oportunidades.',
    deporte: 'el juego nos enseña a crecer y avanzar en equipo.',
    cultura: 'el arte abre espacios para imaginar y expresarnos.',
    comunidad: 'cada encuentro fortalece los lazos de nuestra comunidad.',
  };
  let captionOpenerIndex = 0;

  const getCaption = (alt = '') => {
    const cleanAlt = alt.trim();
    const lowerAlt = cleanAlt.toLocaleLowerCase();
    const category = /talento|deportista|entrenamiento|futsal|fútbol|competencia/.test(lowerAlt)
      ? (/talento|deportista/.test(lowerAlt) ? 'talento' : 'deporte')
      : /arte|cultura|crear/.test(lowerAlt) ? 'cultura' : 'comunidad';
    const isGeneric = !cleanAlt || /^(foto|recuerdos|talento deportivo|participante|experiencia|proceso|actividad|participación)/.test(lowerAlt);
    const start = lowerAlt.split(/\s+/).slice(0, 3).join(' ');

    if (!isGeneric && !usedCaptions.has(lowerAlt) && !captionStarts.has(start)) {
      usedCaptions.add(lowerAlt);
      captionStarts.add(start);
      return cleanAlt;
    }

    for (let attempt = 0; attempt < captionOpeners.length; attempt += 1) {
      const opener = captionOpeners[captionOpenerIndex % captionOpeners.length];
      captionOpenerIndex += 1;
      const message = `${opener} ${captionEndings[category]}`;
      const messageStart = message.toLocaleLowerCase().split(/\s+/).slice(0, 3).join(' ');
      if (!usedCaptions.has(message.toLocaleLowerCase()) && !captionStarts.has(messageStart)) {
        usedCaptions.add(message.toLocaleLowerCase());
        captionStarts.add(messageStart);
        return message;
      }
    }

    return 'Seguimos creciendo juntos y creando nuevas oportunidades.';
  };

  const addPhotoSlide = (source, alt) => {
    if (!source || existingPhotos.has(source)) return;
    const slide = document.createElement('figure');
    slide.className = 'about-slide';
    slide.setAttribute('aria-hidden', 'true');
    const image = document.createElement('img');
    image.dataset.src = source;
    image.alt = alt;
    image.loading = 'lazy';
    const caption = document.createElement('figcaption');
    const label = document.createElement('span');
    label.textContent = 'FUNDARCED · Comunidad';
    const title = document.createElement('strong');
    title.textContent = getCaption(alt);
    caption.append(label, title);
    slide.append(image, caption);
    aboutCarousel.querySelector('.about-carousel-track')?.append(slide);
    slides.push(slide);
    existingPhotos.add(source);
  };

  const existingPhotos = new Set(slides.map((slide) => slide.querySelector('img')?.getAttribute('src')));
  document.querySelectorAll('.program-gallery img').forEach((sourceImage) => {
    addPhotoSlide(sourceImage.getAttribute('src'), sourceImage.alt || 'Actividad de la comunidad FUNDARCED');
  });

  [
    ['imagenes/756647070_18448494166185783_7378892685945878061_n.jpg', 'Recuerdos de la comunidad FUNDARCED'],
    ['imagenes/757374303_18448494148185783_8048940208534969043_n.jpg', 'Recuerdos de la comunidad FUNDARCED'],
    ['imagenes/757480411_18448494157185783_5270741016683579251_n.jpg', 'Recuerdos de la comunidad FUNDARCED'],
    ['imagenes/775407036_18453185599185783_4551546443074457805_n.jpg', 'Recuerdos de la comunidad FUNDARCED'],
    ['imagenes/794328103_1529757922525507_5907440451104304072_n.jpg', 'Recuerdos de la comunidad FUNDARCED'],
    ['imagenes/802002692_18456804610185783_1886080821643183312_n.jpg', 'Recuerdos de la comunidad FUNDARCED'],
    ['imagenes/talento8.jpeg', 'Talento deportivo de FUNDARCED'],
    ['imagenes/talento23.jpg', 'Talento deportivo de FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 12.48.57 (2).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 12.48.58.jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 12.48.59.jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 12.49.01.jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 12.49.19 (1).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 12.49.19 (2).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 15.29.16 (1).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-25 at 15.29.16 (2).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.14.jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.14 (1).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.14 (2).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.14 (5).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.14 (6).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.15.jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.15 (1).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.15 (2).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.15 (3).jpeg', 'Foto de la comunidad FUNDARCED'],
    ['imagenes/WhatsApp Image 2026-09-26 at 10.46.15 (4).jpeg', 'Foto de la comunidad FUNDARCED'],
  ].forEach(([source, alt]) => addPhotoSlide(source, alt));

  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === activeSlide;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      if (active) {
        const image = slide.querySelector('img');
        if (image?.dataset.src) {
          image.src = image.dataset.src;
          delete image.dataset.src;
        }
      }
    });
    const current = activeSlide + 1;
    if (count) count.textContent = `${String(current).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progress?.setAttribute('aria-valuemax', String(slides.length));
    progress?.setAttribute('aria-valuenow', String(current));
    if (progressFill) progressFill.style.transform = `scaleX(${current / slides.length})`;
  };

  const stopAutoplay = () => window.clearInterval(autoplay);
  const startAutoplay = () => {
    stopAutoplay();
    if (!reduceMotion.matches && !document.hidden && slides.length > 1) {
      autoplay = window.setInterval(() => showSlide(activeSlide + 1), 5000);
    }
  };

  previous?.addEventListener('click', () => { showSlide(activeSlide - 1); startAutoplay(); });
  next?.addEventListener('click', () => { showSlide(activeSlide + 1); startAutoplay(); });
  aboutCarousel.addEventListener('mouseenter', stopAutoplay);
  aboutCarousel.addEventListener('mouseleave', startAutoplay);
  aboutCarousel.addEventListener('focusin', stopAutoplay);
  aboutCarousel.addEventListener('focusout', (event) => {
    if (!aboutCarousel.contains(event.relatedTarget)) startAutoplay();
  });
  document.addEventListener('visibilitychange', startAutoplay);
  reduceMotion.addEventListener?.('change', startAutoplay);
  showSlide(0);
  startAutoplay();
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const instagramPostSlots = [...document.querySelectorAll('.instagram-post-slot')];
const instagramEmbedSlots = instagramPostSlots.filter((slot) => {
  const hasEmbed = Boolean(slot.querySelector('blockquote.instagram-media'));
  if (hasEmbed) {
    slot.querySelector('.instagram-embed-placeholder')?.remove();
  }
  return hasEmbed;
});

if (instagramEmbedSlots.length > 0) {
  const processInstagramEmbeds = () => window.instgrm?.Embeds?.process?.();
  const instagramScripts = [...document.querySelectorAll('script[src*="instagram.com/embed.js"]')];
  let instagramScript = instagramScripts[0];

  instagramScripts.slice(1).forEach((script) => script.remove());

  if (!instagramScript) {
    instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    instagramScript.async = true;
    document.body.append(instagramScript);
  }

  if (window.instgrm?.Embeds) {
    processInstagramEmbeds();
  } else {
    instagramScript.addEventListener('load', processInstagramEmbeds, { once: true });
  }
}

const form = document.querySelector('.contact-form');
if (form) {
  const contactButtons = form.querySelectorAll('[data-contact-method]');
  contactButtons.forEach((button) => {
    button.addEventListener('click', () => {
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const translate = (text) => window.FUNDARCED_T?.(text) || text;
    const subject = translate('Contacto y solicitud para unirme a FUNDARCED');
    const body = `${translate('Nombre')}: ${name}\n${translate('Correo')}: ${email}\n\n${translate('Mensaje')}:\n${message}`;
    const method = button.getAttribute('data-contact-method');
    const status = form.querySelector('.form-status');

    if (method === 'email') {
      window.location.href = `mailto:fundarced2016@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) {
        status.textContent = translate('Se abrió tu aplicación de correo para enviar el mensaje.');
      }
      return;
    }

    if (method === 'whatsapp') {
      const whatsappMessage = `${translate('Hola FUNDARCED, quiero unirme.')}\n\n${body}`;
      window.open(
        `https://api.whatsapp.com/send?phone=573156163391&text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
        'noopener'
      );
      if (status) {
        status.textContent = translate('Se abrió WhatsApp con tu mensaje preparado.');
      }
    }
    });
  });
}

const galleryModal = document.querySelector('.gallery-modal');
const galleryModalImage = galleryModal?.querySelector('.gallery-modal-figure img');
const galleryModalTitle = galleryModal?.querySelector('.gallery-modal-title');
const galleryModalCounter = galleryModal?.querySelector('.gallery-modal-counter');
const galleryModalClose = galleryModal?.querySelectorAll('[data-gallery-close]');
const galleryModalPrevious = galleryModal?.querySelector('.gallery-modal-prev');
const galleryModalNext = galleryModal?.querySelector('.gallery-modal-next');
let activeGallery = [];
let activeGalleryIndex = 0;
let galleryTouchStartX = 0;
let lastFocusedElement = null;

const updateGalleryModal = () => {
  const image = activeGallery[activeGalleryIndex];
  if (!image || !galleryModalImage || !galleryModalTitle || !galleryModalCounter) {
    return;
  }

  galleryModalImage.src = image.src;
  galleryModalImage.alt = image.alt;
  galleryModalTitle.textContent = image.alt;
  galleryModalCounter.textContent = `${activeGalleryIndex + 1} / ${activeGallery.length}`;
  const hasMultipleImages = activeGallery.length > 1;
  galleryModalPrevious?.toggleAttribute('hidden', !hasMultipleImages);
  galleryModalNext?.toggleAttribute('hidden', !hasMultipleImages);
  galleryModalCounter.hidden = !hasMultipleImages;
};

const closeGalleryModal = () => {
  if (!galleryModal) {
    return;
  }

  galleryModalClose?.[0]?.blur();
  galleryModal.classList.remove('is-open');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('gallery-is-open');
  lastFocusedElement?.focus();
  lastFocusedElement = null;
};

document.querySelectorAll('main img').forEach((image) => {
  if (image.closest('.instagram-highlight, [data-about-carousel]')) {
    return;
  }

  const gallery = image.closest('.program-gallery');
  const images = gallery ? [...gallery.querySelectorAll('img')] : [image];
  const index = images.indexOf(image);

  if (!image.alt) {
    image.alt = 'Imagen de FUNDARCED';
  }

  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', `Ver imagen ${index + 1} de ${images.length}`);

  const openImage = () => {
    lastFocusedElement = document.activeElement;
    activeGallery = images;
    activeGalleryIndex = index;
    updateGalleryModal();
    galleryModal?.classList.add('is-open');
    galleryModal?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('gallery-is-open');
    galleryModalClose?.[0]?.focus();
  };

  image.addEventListener('click', openImage);
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openImage();
    }
  });
});

document.querySelectorAll('.program-gallery').forEach((gallery) => {
  gallery.tabIndex = 0;
  gallery.addEventListener('keydown', (event) => {
    if (event.target !== gallery || !['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    gallery.scrollBy({
      left: (event.key === 'ArrowRight' ? 1 : -1) * gallery.clientWidth * 0.8,
      behavior: 'smooth',
    });
  });
});

galleryModalPrevious?.addEventListener('click', () => {
  activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.length) % activeGallery.length;
  updateGalleryModal();
});

galleryModalNext?.addEventListener('click', () => {
  activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.length;
  updateGalleryModal();
});

galleryModalClose?.forEach((button) => button.addEventListener('click', closeGalleryModal));

galleryModalImage?.addEventListener('touchstart', (event) => {
  galleryTouchStartX = event.changedTouches[0].screenX;
}, { passive: true });

galleryModalImage?.addEventListener('touchend', (event) => {
  const distance = event.changedTouches[0].screenX - galleryTouchStartX;
  if (Math.abs(distance) < 45) {
    return;
  }

  if (distance > 0) {
    galleryModalPrevious?.click();
  } else {
    galleryModalNext?.click();
  }
}, { passive: true });

document.addEventListener('keydown', (event) => {
  if (!galleryModal?.classList.contains('is-open')) {
    return;
  }

  if (event.key === 'Escape') {
    closeGalleryModal();
  } else if (event.key === 'ArrowLeft') {
    galleryModalPrevious?.click();
  } else if (event.key === 'ArrowRight') {
    galleryModalNext?.click();
  }
});

const testimonialForm = document.querySelector('#testimonial-form');
if (testimonialForm) {
  const testimonialList = document.querySelector('#testimonial-list');
  const testimonialEmpty = document.querySelector('#testimonial-empty');
  const testimonialStatus = document.querySelector('#testimonial-form-status');
  const testimonialEndpoint = String(window.FUNDARCED_TESTIMONIALS_API || '').trim();
  let testimonialRequestId = 0;

  const renderTestimonials = (testimonials) => {
    testimonialList.replaceChildren();
    testimonialEmpty.hidden = testimonials.length > 0;

    testimonials.forEach(({ name, role, message }) => {
      const card = document.createElement('article');
      card.className = 'quote-card';
      const quote = document.createElement('p');
      quote.textContent = `“${message}”`;
      const author = document.createElement('div');
      author.className = 'author';
      const authorName = document.createElement('strong');
      authorName.textContent = name;
      const authorRole = document.createElement('span');
      authorRole.textContent = window.FUNDARCED_T?.(role) || role;
      author.append(authorName, authorRole);
      card.append(quote, author);
      testimonialList.append(card);
    });
  };

  const loadTestimonials = () => {
    if (!testimonialEndpoint) {
      testimonialStatus.textContent = window.FUNDARCED_T?.('Falta conectar la hoja compartida de testimonios.') || 'Falta conectar la hoja compartida de testimonios.';
      return;
    }

    const requestId = ++testimonialRequestId;
    const callbackName = `fundarcedTestimonialsCallback${requestId}`;
    const script = document.createElement('script');
    const timeout = window.setTimeout(() => {
      delete window[callbackName];
      script.remove();
      testimonialStatus.textContent = window.FUNDARCED_T?.('No se pudieron cargar las opiniones. Intenta de nuevo más tarde.') || 'No se pudieron cargar las opiniones. Intenta de nuevo más tarde.';
    }, 15000);

    window[callbackName] = (response) => {
      window.clearTimeout(timeout);
      script.remove();
      delete window[callbackName];
      if (!response?.ok || !Array.isArray(response.testimonials)) {
        testimonialStatus.textContent = window.FUNDARCED_T?.('No se pudieron cargar las opiniones. Intenta de nuevo más tarde.') || 'No se pudieron cargar las opiniones. Intenta de nuevo más tarde.';
        return;
      }
      renderTestimonials(response.testimonials);
      testimonialStatus.textContent = '';
    };

    script.onerror = () => {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
      testimonialStatus.textContent = window.FUNDARCED_T?.('No se pudieron cargar las opiniones. Intenta de nuevo más tarde.') || 'No se pudieron cargar las opiniones. Intenta de nuevo más tarde.';
    };
    script.src = `${testimonialEndpoint}${testimonialEndpoint.includes('?') ? '&' : '?'}callback=${callbackName}`;
    document.head.append(script);
  };

  testimonialForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(testimonialForm);
    const testimonial = {
      name: String(formData.get('name') || '').trim(),
      role: String(formData.get('role') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') || '').trim(),
    };

    if (!testimonialEndpoint) {
      testimonialStatus.textContent = window.FUNDARCED_T?.('El formulario estará disponible cuando se conecte la hoja compartida.') || 'El formulario estará disponible cuando se conecte la hoja compartida.';
      return;
    }

    if (!testimonial.name || !testimonial.role || testimonial.message.length < 10 || !testimonial.consent) {
      testimonialStatus.textContent = window.FUNDARCED_T?.('Completa los campos y autoriza mostrar tu opinión para continuar.') || 'Completa los campos y autoriza mostrar tu opinión para continuar.';
      return;
    }

    testimonialStatus.textContent = window.FUNDARCED_T?.('Enviando tu opinión…') || 'Enviando tu opinión…';
    fetch(testimonialEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify(testimonial),
    }).then(() => {
      testimonialForm.reset();
      testimonialStatus.textContent = window.FUNDARCED_T?.('Gracias. Tu opinión fue enviada; actualizaremos la lista enseguida.') || 'Gracias. Tu opinión fue enviada; actualizaremos la lista enseguida.';
      window.setTimeout(loadTestimonials, 1800);
    }).catch(() => {
      testimonialStatus.textContent = window.FUNDARCED_T?.('No se pudo enviar la opinión. Revisa tu conexión e inténtalo de nuevo.') || 'No se pudo enviar la opinión. Revisa tu conexión e inténtalo de nuevo.';
    });
  });

  if (testimonialEndpoint) {
    loadTestimonials();
    window.setInterval(loadTestimonials, 60000);
  } else {
    testimonialEmpty.hidden = false;
    testimonialForm.querySelector('button[type="submit"]').disabled = true;
    loadTestimonials();
  }
}
