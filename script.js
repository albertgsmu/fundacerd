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
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
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
    const subject = 'Contacto y solicitud para unirme a FUNDARCED';
    const body = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;
    const method = button.getAttribute('data-contact-method');
    const status = form.querySelector('.form-status');

    if (method === 'email') {
      window.location.href = `mailto:fundarced2016@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) {
        status.textContent = 'Se abrió tu aplicación de correo para enviar el mensaje.';
      }
      return;
    }

    if (method === 'whatsapp') {
      const whatsappMessage = `Hola FUNDARCED, quiero unirme.\n\n${body}`;
      window.open(
        `https://api.whatsapp.com/send?phone=573156163391&text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
        'noopener'
      );
      if (status) {
        status.textContent = 'Se abrió WhatsApp con tu mensaje preparado.';
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

const updateGalleryModal = () => {
  const image = activeGallery[activeGalleryIndex];
  if (!image || !galleryModalImage || !galleryModalTitle || !galleryModalCounter) {
    return;
  }

  galleryModalImage.src = image.src;
  galleryModalImage.alt = image.alt;
  galleryModalTitle.textContent = image.alt;
  galleryModalCounter.textContent = `${activeGalleryIndex + 1} / ${activeGallery.length}`;
};

const closeGalleryModal = () => {
  if (!galleryModal) {
    return;
  }

  galleryModal.classList.remove('is-open');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('gallery-is-open');
};

document.querySelectorAll('main img').forEach((image) => {
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
