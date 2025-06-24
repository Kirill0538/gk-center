// Плавная прокрутка по якорям
document.querySelectorAll('.navbar a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Обработка формы «Получить консультацию» → отправка в WhatsApp
document.getElementById('consultForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone) {
    alert("Пожалуйста, заполните имя и телефон.");
    return;
  }

  const text = `Здравствуйте! Меня зовут ${name}. Мой телефон: ${phone}. Комментарий: ${message}`;
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/79925206192?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
});
