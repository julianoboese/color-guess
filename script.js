function generateColors() {
  const colors = document.getElementsByClassName('ball');
  for (let i = 0; i < colors.length; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colors[i].style.backgroundColor = `#${randomColor}`;
  }
}

window.onload = generateColors;
