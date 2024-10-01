const sport = ["https://rsport.ria.ru/","https://www.forbes.ru/stil-zhizni-slideshow/hobbi/79408-10-neobychnyh-vidov-sporta-vhodyashchih-v-modu","https://journal.tinkoff.ru/unusual-sport-ideas/", "https://www.championat.com/", "https://www.rbc.ru/sport/"];
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
    ifram.src=sport[a];
    newBlock.appendChild(ifram);
});
