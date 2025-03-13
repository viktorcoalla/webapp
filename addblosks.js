


(function () {


var clarkKent = document.getElementById('allrecords'); // Элемент, который нужно обернуть
var phoneBooth = document.createElement('main'); // Создаем div, который станет оберткой
var phoneBooth2 = document.createElement('div'); // Создаем div, который станет оберткой

clarkKent.parentNode.insertBefore(phoneBooth, clarkKent); // Вставляем обертку перед элементом
phoneBooth.parentNode.insertBefore(phoneBooth2, phoneBooth); // Вставляем обертку перед элементом
phoneBooth.appendChild(clarkKent); // Перемещаем исходный элемент в обертку
phoneBooth2.appendChild(phoneBooth); // Перемещаем исходный элемент в обертку
phoneBooth.setAttribute('id', 'swup');
phoneBooth.setAttribute('class', 'transition-main');
}());