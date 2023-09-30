//Базовые арифметические операторы

const width = 10;
const heigh = 5;
const space = width * heigh;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3;// 2 * 2 * 2
console.log(volume);

// Строки
const city = 'Minsk';
const street = 'Aerodromnaya';
console.log(city + ', ' + street + ' '+ 5);

//Операторы присваивания и сравнения
// Операторы присваивания
let age = 18 + 5;
age += 2; //age = age + 2
age -= 3; // age = age - 3
age *= 2; // age = age * 2
age /= 2; // age = age / 2 примечание все команды выполняются по порядку и каждый последовательный возраст отличается от стартового

age ++; // age = age + 1
age --; // age = age - 1

console.log(age);

//Операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

//порядок операторов
const isSuited = 100 - 10 > 90 - 5; // приоритеты 100 -(12) 10 >(10) 90 -(12) 5 вВ скобках обозначено число приоритета, всего 19 чем выше число тем выше приоритет, 1 низший
console.log(isSuited);

const a = 6 + 10 / 2; // Умножение и деление приоритет 13, сложение и вычитание 12. Если есть нужда выполнить сначала первое действие, либо обозначить приоритет. Нужно обозначить нужное скобками и приоритет поднимется до максимального 19 Группировка
console.log(a);
let b;
let c;
c = b = 100 + 50; // Присваивание идет не слева направо, а справа налево
console.log(c);
console.log(b);

// Примитивные типы данных
const age = 18; // числа number
const surname = 'Ivanov'; // строка string Значение заключается в кавычки: одинарные, двойные, косые
const isAdmin = true; // boolean (true/false)
const isAdmin = undefined; // не заданное undefined
let data; // не заданное undefined
let data = null; // Пустое значение
const admin = Symbol('Admin'); // Уникальное неизменное значение
constbig = BigInt(99999999999999999); // Работа с большими числами

let d = 5;
let e = 5.6;
console.log(typeof d);
console.log(typeof e);
d = 'number';
console.log(typeof d);
let isAdmin = false; // можно сразу задать false выдаст  boolean
console.log(typeof isAdmin); 
let isAdmin = a > 10; // можно сравнить и снова выдаст
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(typeof d); // типа ноль не существует консоль выдает тип как объект
console.log(d == null); // если требуется узнать точно ли тип null (пустое значение) 
 
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