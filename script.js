const container = document.getElementById('container');
const addBlockButton = document.getElementById('addBlock');
const removeBlockButton = document.getElementById('removeBlock');

// Функция для добавления нового блока
addBlockButton.addEventListener('click', () => {
    const newBlock = document.createElement('div');
    newBlock.className = 'block';
    container.appendChild(newBlock);

    // const title = document.createElement('h2');
    // title.className = 'h2';
    // newBlock.appendChild(title);
    const ifram = document.createElement('iframe');
    ifram.src="https://www.avito.ru/"
    newBlock.appendChild(ifram);
});

// Функция для удаления последнего блока
removeBlockButton.addEventListener('click', () => {
    const blocks = container.getElementsByClassName('block');
    if (blocks.length > 0) {
        container.removeChild(blocks[blocks.length - 1]);
    } else {
        alert('Нет блоков для удаления!');
    }
});
