'use strict'

//Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый 
//товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

const products = [
    {
        id: 3,
        price: 170,
        
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// Создаем новый массив на карточки с учетом скидки
const productsSale = []

// Применяем скидку через forEach и сохраняем id карточек
products.forEach((elem) => {
    productsSale.push(elem.id)
    productsSale.push(elem.price - (elem.price * 0.15))
})

// Выводим в консоль посмотреть
console.log(productsSale)

// Проверяем что весь массив перенёсся правильно
productsSale.forEach((elem) => {
    console.log(elem)
})


