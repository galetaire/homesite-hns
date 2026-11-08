// Collapse each guide subsection under its h4; click the heading to open or close it.
// Links to a closed subsection, or to anything inside one (like the "On this page" index), open it first.
(function () {
  var headings = Array.prototype.slice.call(document.querySelectorAll('.guide h4'));
  if (!headings.length) return;

  function setOpen(button, body, open) {
    body.hidden = !open;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  headings.forEach(function (h4, i) {
    var body = document.createElement('div');
    body.className = 'section-body';
    body.id = (h4.id || 'subsection-' + i) + '-body';

    // Everything after the h4, up to the next h4, h3 or h2, belongs to its subsection.
    var node = h4.nextSibling;
    while (node && !(node.nodeType === 1 && /^H[234]$/.test(node.tagName))) {
      var next = node.nextSibling;
      body.appendChild(node);
      node = next;
    }
    h4.parentNode.insertBefore(body, h4.nextSibling);

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'section-toggle';
    button.setAttribute('aria-controls', body.id);
    while (h4.firstChild) button.appendChild(h4.firstChild);
    h4.appendChild(button);

    setOpen(button, body, false);
    button.addEventListener('click', function () {
      setOpen(button, body, body.hidden);
    });
  });

  function reveal(id) {
    var target = id && document.getElementById(id);
    if (!target) return null;
    var h4 = target.tagName === 'H4' ? target : null;
    var body = h4 ? h4.nextElementSibling : target.closest('.section-body');
    if (body && body.classList.contains('section-body')) {
      var heading = h4 || body.previousElementSibling;
      setOpen(heading.querySelector('.section-toggle'), body, true);
    }
    return target;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (link) reveal(decodeURIComponent(link.getAttribute('href').slice(1)));
  });

  window.addEventListener('hashchange', function () {
    reveal(decodeURIComponent(location.hash.slice(1)));
  });

  var initial = reveal(decodeURIComponent(location.hash.slice(1)));
  if (initial) initial.scrollIntoView();
})();
