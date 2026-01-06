// 1. Знайди форму з id="myform" і додай обробник submit
document.getElementById('myform').addEventListener('submit', function (e) {

  // 2. Заборони стандартну відправку форми
  e.preventDefault();

  // 3. Збережи форму в змінну el
  var el = document.getElementById('myform');

  // 4. Отримай значення з поля username
  var username = el.username.value.trim(myform.username.value);

  // 5. Отримай значення з поля email
  var email = el.email.value.trim(myform.email.value);

  // 6. Отримай текст з поля message
  var message = el.message.value.trim(myform.message.value);

  // 7. Створи змінну error для тексту помилки
  var error = '';

  // 8. Зроби перевірку імені (мінімум 3 символи)
  if ( username.length < 3 ) {
    error = "Ім'я повинно містити мінімум 3 символи";
  }

  // 9. Якщо ім’я правильне — перевір email (мінімум 5 символів)
  else if ( email.length < 3 ) {
    error = "Email занадто короткий";
  }

  // 10. Перевір, чи email містить символ @
  else if ( email.indexOf('@') === -1 ) {
    error = "Email повинен містити символ @";
  }

  // 11. Перевір повідомлення (мінімум 10 символів)
  else if ( message.length < 10 ) {
    error = "Повідомлення повинно містити мінімум 10 символів";
  }

  // 12. Якщо є помилка — покажи її в елементі з id="error"
  if ( error ) {
    document.getElementById('error').innerText = error;
    return; // зупини виконання коду
  }

  // 13. Якщо помилок немає — очисти текст помилки
  document.getElementById('error').innerText = '';

  // 14. Зроби перехід на сторінку thankyou.html
  window.location.href = 'thankyou.html';
});
