// Задача
let job = 40 / 5;
let days = 11 - 2;
console.log(days >= job);
const payhourUSD = 80;
let payment = payhourUSD * 40;
console.log(payment)

// Второе решение
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11-2) * 5;

//Результат
console.log('Смогу ли завершить проект? ' + (availableHours > projectHours))
console.log('Стоимость работ:' + projectHours * payRateUSD + '$')