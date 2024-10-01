const gardening = ["https://bigenc.ru/c/sadovodstvo-48eb6c",
    "https://www.kp.ru/family/sad-i-ogorod/", 
    "https://zberri.com/?yclid=12383309698556493823",
    "https://agropoliprom.ru/katalog/sredstva_zashchity_rasteniy/filter/proizvoditel-is-npo_binam/apply/?yclid=465655112446509055", 
    "https://rushoz.ru/articles/sadovodstvo/sadovodstvo.html"];

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
    ifram.src=gardening[a];
    newBlock.appendChild(ifram);
});