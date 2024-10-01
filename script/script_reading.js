const reading = ["https://www.b17.ru/article/470488/",
    "https://blog.vsemayki.ru/spokoynye/kak-nauchitsya-pravilno-chitat/",
    "https://www.bolshoyvopros.ru/questions/4201839-literatura-i-literaturnoe-chtenie-v-chjom-raznica.html", 
    "https://www.gazeta.ru/family/2024/02/12/18248293.shtml", 
    "https://metodlit.ru/catalog/kind-uchebnaya?utm_source=yandex&utm_medium=cpc&utm_campaign=all_rf-reg_mk&utm_term=---autotargeting&etext=2202.SxG-ZIquzI71ZQxOP89Ozia45HomqT0RhzJw7XLWiMIz1G851sl2jBwJzQJSvB0aZmlsZG10YWhmb3FwdHZ2ZQ.9a33b1e474bcadda0a09df8ec8788cff5c816759&yclid=15806989164596166655"];


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
    ifram.src=reading[a];
    newBlock.appendChild(ifram);
});