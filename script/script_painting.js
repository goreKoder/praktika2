const painting = ["https://school.synergy.ru/lifestyle/s-chego-nachat-uchitsya-risovaniyu",
    "https://zvetnoe.ru/club/poleznye-stati/risovanie-karandashom-dlya-nachinayushchikh/", 
    "https://www.kp.ru/putevoditel/obrazovanie/kak-nauchitsya-risovat/",
    "https://mk-vangogi.ru/?yclid=1933909768335523839",
    "https://poznavaika.shop/checkout/misc/risuem-ladoshkami/?utm_source=yandex&utm_medium=cpc&utm_campaign=108950097&utm_content=15984414437&utm_term=---autotargeting&yclid=12494023285315731455"];


var a = 0;

document.getElementById('togglePanel1').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const panel = document.getElementById('linkPanel1');
    panel.classList.toggle('hidden1'); // Переключаем класс для показа/скрытия панели
});


const container = document.getElementById('container');
const addBlockButton = document.getElementById('addBlock');
// Функция для добавления нового блока
addBlockButton.addEventListener('click', () => {
    const newBlock = document.createElement('div');
    newBlock.className = 'block';
    container.appendChild(newBlock);
    a = a+1;
    const ifram = document.createElement('iframe');
    ifram.src=painting[a];
    newBlock.appendChild(ifram);
});