// task 1
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// 1.	Створіть змінну city з типом даних string.
// 2.	Присвойте їй значення «Київ».
// 3.	Змініть значення змінної city на «Львів».
// 4.	Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.
// 5.	Вивести значення змінної address з допомогою команди console.log().

 let city: string;
 city = "Київ";
 city = "Львів";
 let address: string = city;
 console.log(address);

//  task 2
//  Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, 
//  а потім виводить в console.log() повідомлення:
// 1.	Число парне.
// 2.	Число непарне.
// 3.	Число 0.

const inputNumber = Number(prompt("Введіть число:"));

if (inputNumber === 0) {
  console.log("Число 0.");
} else if (inputNumber % 2 === 0) {
  console.log("Число парне.");
} else {
  console.log("Число непарне.");
}

// task 3
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1.	Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2.	Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// 1.	max(5,-2) – має повернути 5.
// 2.	max(5,-2, 30, 6) – має повернути 30

function max(...numbers: number[]): number {
    let maxNumber = -Infinity;
    for (const number of numbers) {
      if (number > maxNumber) {
        maxNumber = number;
      }
    }
    return maxNumber;
  }
  
  console.log(max(5, -2)); 
  console.log(max(5, -2, 30, 6));

//  task 4
//  Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. 
// В залежності від того що передали в функцію має виводити наступні повідомлення:
// •	Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// •	Якщо передали не число - Повинно бути числове значення.
// •	Якщо число менше 0 - Введіть додатнє число.
// •	Якщо в функцію нічого не передали - Будь ласка, введіть число!
 
function getSqrt(number: number | string | undefined): string {
    if (typeof number === 'undefined') {
      return 'Будь ласка, введіть число!';
    }
  
    if (typeof number === 'string') {
      return 'Повинно бути числове значення.';
    }
  
    if (number < 0) {
      return 'Введіть додатнє число.';
    }
  
    const sqrt = Math.sqrt(number);
    return `Квадратний корінь з ${number} дорівнює ${sqrt}.`;
  }
  
  console.log(getSqrt(25)); 
  console.log(getSqrt('шість')); 
  console.log(getSqrt(-2)); 
  console.log(getSqrt(undefined)); 