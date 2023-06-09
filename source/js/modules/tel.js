window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    let keyCode;
    function mask(event) {
      // event.keyCode && keyCode === event.keyCode;
      let pose = input.selectionStart;
      if (pose < 3) {
        event.preventDefault();
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let vale = input.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function (arr) {
        return i < vale.length ? vale.charAt(i++) || def.charAt(i) : arr;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        // i < 5 && i === 3;
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, input.value.length).replace(/_+/g,
          function (arr) {
            return '\\d{1,' + arr.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(input.value) || input.value.length < 5 || keyCode > 47 && keyCode < 58) {
        input.value = newValue;
      }
      if (event.type === 'blur' && input.value.length < 5) {
        input.value = '';
      }
      // if ($('input[type="tel"]').val().length!=10) {
      //   // вы ввели неправильное количество символов в элемент...
      // }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});
