// Знаходимо форму з id="myform" і слухаємо кнопку "Надіслати"
document.getElementById('myform').addEventListener('submit', function (e) {

  // Зупиняємо стандартну відправку форми
  e.preventDefault();

  // Запам’ятовуємо всю форму в змінну el
  var el = document.getElementById('myform');

  // Забираємо значення з полів форми
  // trim() прибирає зайві пробіли
  var username = el.username.value.trim();
  var email = el.email.value.trim();
  var message = el.message.value.trim();

  // Змінна для тексту помилки (поки порожня)
  var error = '';

  // Перевіряємо ім’я (мінімум 2 символи)
  if (username.length < 2) {
    error = "Ім'я занадто коротке";
  }

  // Перевіряємо email (мінімум 5 символів)
  else if (email.length < 5) {
    error = "Email занадто короткий";
  }

  // Перевіряємо, чи є в email символ @
  else if (!email.includes('@')) {
    error = "Email повинен містити символ @";
  }

  // Перевіряємо повідомлення (мінімум 10 символів)
  else if (message.length < 10) {
    error = "Повідомлення повинно містити мінімум 10 символів";
  }

  // Якщо є хоча б одна помилка
  if (error !== '') {

    // Показуємо текст помилки на сторінці
    document.getElementById('error').innerText = error;

    // Зупиняємо роботу коду
    return;
  }

  // Якщо помилок немає — очищаємо повідомлення
  document.getElementById('error').innerText = '';

  // Переходимо на сторінку подяки
  window.location.href = 'thankyou.html';
});


