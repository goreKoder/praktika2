document.getElementById('togglePanel1').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const panel = document.getElementById('linkPanel1');
    panel.classList.toggle('hidden1'); // Переключаем класс для показа/скрытия панели
});
document.getElementById('togglePanel2').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const panel = document.getElementById('linkPanel2');
    panel.classList.toggle('hidden2'); // Переключаем класс для показа/скрытия панели
});