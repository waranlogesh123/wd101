const changeColorButton = document.getElementById('changeColorButton');
const mainContent = document.querySelector('main');

changeColorButton.addEventListener('click', () => {
    mainContent.style.color = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
