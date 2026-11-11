// Sends the faucet request form to Web3Forms, which emails it to the site owner,
// and keeps a shared count of the HNS requested so far (HNS_PER_REQUEST per sent request).
(function () {
  var form = document.getElementById('faucet-form');
  if (!form) return;

  var PLACEHOLDER_KEY = 'YOUR_ACCESS_KEY_HERE';
  var COUNTER_URL = 'https://abacus.jasoncameron.dev';
  var COUNTER_KEY = 'galetaire-hns-faucet/requests';
  var HNS_PER_REQUEST = 20;
  var HNS_LIMIT = 2000;

  var status = form.querySelector('.faucet-status');
  var counter = document.getElementById('faucet-counter');
  var button = form.querySelector('button[type="submit"]');
  var buttonText = button.textContent;
  var outOfFunds = false;

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = 'faucet-status' + (kind ? ' ' + kind : '');
  }

  function showCount(requests) {
    var given = requests * HNS_PER_REQUEST;
    outOfFunds = given >= HNS_LIMIT;
    counter.hidden = outOfFunds;
    button.disabled = outOfFunds;
    button.classList.toggle('empty', outOfFunds);
    button.textContent = outOfFunds ? 'No funds temporarily' : buttonText;
    if (!outOfFunds) {
      counter.innerHTML = '<b>' + given.toLocaleString('en') + ' HNS</b> given so far, of ' + HNS_LIMIT.toLocaleString('en') + ' HNS available.';
    }
  }

  // A counter that doesn't exist yet (404) simply means nothing has been given.
  function readCounter(action) {
    return fetch(COUNTER_URL + '/' + action + '/' + COUNTER_KEY).then(function (response) {
      if (response.status === 404) return 0;
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json().then(function (result) { return result.value; });
    });
  }

  // If the counter service is down, the form keeps working without it.
  readCounter('get').then(showCount).catch(function () { counter.hidden = true; });

  // Discord usernames and Handshake addresses are lowercase, so accept any case as typed.
  ['discord', 'address'].forEach(function (id) {
    var field = document.getElementById(id);
    field.addEventListener('input', function () {
      var start = field.selectionStart;
      var end = field.selectionEnd;
      field.value = field.value.toLowerCase();
      field.setSelectionRange(start, end);
    });
    field.addEventListener('change', function () {
      field.value = field.value.trim();
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (outOfFunds) return;

    if (form.elements.access_key.value === PLACEHOLDER_KEY) {
      setStatus('This form isn’t set up yet, so the request was not sent.', 'error');
      return;
    }

    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = typeof value === 'string' ? value.trim() : value;
    });

    button.disabled = true;
    setStatus('Sending your request…');

    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        if (!result.success) throw new Error(result.message || 'Unknown error');
        form.reset();
        setStatus('Thanks! Your request was sent. You’ll receive your coins once it has been checked.', 'ok');
        readCounter('hit').then(showCount).catch(function () { counter.hidden = true; });
      })
      .catch(function () {
        setStatus('Sorry, your request couldn’t be sent. Please try again later.', 'error');
      })
      .then(function () {
        if (!outOfFunds) button.disabled = false;
      });
  });
})();
