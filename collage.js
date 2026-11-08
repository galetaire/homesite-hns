// Click a collage image to see it full size; arrows and the keyboard step through the set.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.collage-item'));
  if (!items.length || !window.HTMLDialogElement) return;

  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.innerHTML =
    '<button class="lightbox-close" aria-label="Close">✕</button>' +
    '<img alt="">' +
    '<div class="lightbox-bar">' +
    '<button data-step="-1" aria-label="Previous image">←</button>' +
    '<p class="lightbox-caption"></p>' +
    '<button data-step="1" aria-label="Next image">→</button>' +
    '</div>';
  document.body.appendChild(dialog);

  var img = dialog.querySelector('img');
  var caption = dialog.querySelector('.lightbox-caption');
  var current = 0;

  function show(i) {
    current = (i + items.length) % items.length;
    var item = items[current];
    img.src = item.getAttribute('href');
    img.alt = item.querySelector('img').alt;
    caption.textContent = item.querySelector('.collage-caption').textContent;
  }

  items.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      show(i);
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', function (e) {
    var step = e.target.getAttribute('data-step');
    if (step) show(current + parseInt(step, 10));
    else if (e.target === dialog || e.target.classList.contains('lightbox-close')) dialog.close();
  });

  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft') show(current - 1);
  });
})();
