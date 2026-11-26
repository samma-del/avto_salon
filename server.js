const express = require('express');
const path = require('node:path');

const app = express();

const cars = [
  { brand: 'Toyota', model: 'Camry', year: 2023, price: 15500000 },
  { brand: 'Hyundai', model: 'Tucson', year: 2024, price: 14200000 },
  { brand: 'Kia', model: 'Sportage', year: 2024, price: 13600000 }
];

app.get('/api/cars', (request, response) => {
  response.json(cars);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Сайт запущен: http://localhost:3000');
});