const science = ["https://author.today/post/551470",
    "https://trends.rbc.ru/trends/social/63a477259a79470546f2667f", 
    "https://5uglov.ru/post/18344_nauka_segodnya_chem_zanyatsya_esli_druzhish_s_fizikoy_himiey_i_biologiey", 
    "https://nplus1.ru/material/2023/09/28/hobbies-of-scientists", 
    "https://kulturologia.ru/news/6877/"];


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
    ifram.src=science[a];
    newBlock.appendChild(ifram);
});