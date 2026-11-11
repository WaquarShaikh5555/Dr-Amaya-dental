const form = document.querySelector('#cake-form');
const dateInput = document.querySelector('#date');
const today = new Date();
dateInput.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = `Hi BK Bakery, I'd like to order a cake. Flavour: ${data.get('flavour')} Weight: ${data.get('weight')} Date: ${data.get('date')}${data.get('details').trim() ? ` Details: ${data.get('details').trim()}` : ''}`;
  window.open(`https://wa.me/919326051248?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
// When approved photos are provided, add gallery buttons with data-gallery-src,
// data-gallery-alt and optionally data-gallery-caption to enable the lightbox.
const lightbox = document.querySelector('#lightbox');
document.querySelectorAll('[data-gallery-src]').forEach((button) => {
  button.addEventListener('click', () => {
    const image = lightbox.querySelector('img');
    image.src = button.dataset.gallerySrc;
    image.alt = button.dataset.galleryAlt || '';
    lightbox.querySelector('p').textContent = button.dataset.galleryCaption || '';
    lightbox.showModal();
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-top, .offer-card, .steps article').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
