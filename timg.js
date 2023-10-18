const express = require('express');
const { createCanvas, loadImage, registerFont } = require('canvas');
const app = express();

// Установка размеров холста
const canvasWidth = 800;
const canvasHeight = 400;

// Установка шрифта (загрузите свой шрифт и укажите путь)
registerFont('path/to/your-font.ttf', { family: 'YourFont' });

app.get('/generate', async (req, res) => {
  // Получите текст из запроса
  const text = req.query.text || 'Hello, World!';

  // Создайте новый холст
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Настройте стили и отрисуйте текст на холсте
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.font = '40px YourFont'; // Используйте ваш шрифт и размер
  ctx.fillStyle = 'black';
  ctx.fillText(text, 50, 100);

  // Отправьте изображение как ответ
  res.set('Content-Type', 'image/png');
  canvas.createPNGStream().pipe(res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
