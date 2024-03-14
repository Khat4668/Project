"use strict";
// let a = Math.floor(Math.random() * 10);

// let b = Math.floor(Math.random() * 10);


// function plus (a, b) {
//     return a + b;
// }

// function minus (a, b) {
//     return a - b;
// }

// function multiply (a, b) {
//     return a * b;
// }

// function devide (a, b) {
//     return a / b;
// }

// console.log('Плюс ' + plus(a, b))
// console.log('Вычитание ' + minus(a, b))
// console.log('Умножение ' + multiply(a, b))
// console.log('Деление ' + devide(a, b))



// 	function factorial(n) {

//   if (n <= 1) {
//     return 1
//   }
//   return n * factorial(n - 1)
// }

// console.log(factorial(5))
// // 120

// let n = 0;

// do {
//   if (n == 0) {
//     console.log(n + ' - это ноль');
//   } else {
//     if (n % 2 == 0) {
//       console.log(n + ' - это четное число');
//     } else {
//       console.log(n + ' - это нечетное число');
//     }
//   }
//   n++
// } while (n <= 1000)



// var i = 0,
//   j = 0;

// var max = 20;

// while (i < max) {

//   var x = "x";

//   for (j = 0; j < i; j++) {

//     x += "x";
//   }

//   console.log(x);

//   i++;
// }

// let num1 = prompt('Enter side of a square');

// alert(Number(num1) ** 2 );

// #Задание на тему объектов
// function fnc() {
//     let userInput = prompt('Введите число:');
//     let number = parseInt(userInput);

//     if (0 <= number && number <= 999) {
//         let chislo = {
//             hundreds: Math.floor(number / 100),

//             tens: Math.floor((number % 100) / 10),

//             ones: number % 10
//         };
//         return chislo;
//     } else {
//         return null;
//     }
// }

// console.log(fnc());

// #Задание на тему DOM

// №1. Реализовать добавление товаров в блок корзины по клику. Выводить итоговую цену.
// №1.1. Добавить дата атрибуты с именем и ценой.
// №1.2. Получать в цикле и перебирать, создавая объект и размещая туда все.

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll('.button');
  let totalPrice = 0;

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const nameOfProduct = this.getAttribute('data-name');
      const priceOfProduct = this.getAttribute('data-price');

      const eachProduct = document.createElement('div');
      eachProduct.className = 'basket__product';
      document.querySelector('.basket-products').appendChild(eachProduct);

      const name = document.createElement('div');
      name.className = 'basket-products__name';
      name.innerText = nameOfProduct;
      eachProduct.appendChild(name);

      const price = document.createElement('div');
      price.className = 'basket-products__price';
      price.innerText = priceOfProduct;
      eachProduct.appendChild(price);

      const totalBusket = document.querySelector('.basket-total__sum');

      let priceNumber = parseInt(priceOfProduct);
      totalPrice += priceNumber;

      totalBusket.textContent = totalPrice + '$';
    });
  })
});
