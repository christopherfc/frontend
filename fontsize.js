const rangeInput = document.getElementById('buttons-fixed__buttons-range');
const htmlElement = document.querySelector('html');

rangeInput.addEventListener('input', function () {
    const minFontSize = 50;
    const maxFontSize = 100;
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * this.value / 10);
    htmlElement.style.fontSize = `${fontSize}%`;
});