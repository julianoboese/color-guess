const colors = document.getElementsByClassName('ball');
const guessAnswer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

function generateColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colors[i].style.backgroundColor = `#${randomColor}`;
  }

  const rgbIndex = Math.floor(Math.random() * (colors.length - 1));
  document.getElementById('rgb-color').innerHTML = colors[rgbIndex].style.backgroundColor.slice(3);
}

window.onload = generateColors;

function checkAnswer() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (event) => {
      const colorToGuess = `rgb${document.getElementById('rgb-color').innerHTML}`;
      if (event.target.style.backgroundColor === colorToGuess) {
        guessAnswer.innerHTML = 'Acertou!';
      } else {
        guessAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}

checkAnswer();

function resetColors() {
  resetButton.addEventListener('click', () => {
    generateColors();
    guessAnswer.innerHTML = 'Escolha uma cor';
  });
}

resetColors();
