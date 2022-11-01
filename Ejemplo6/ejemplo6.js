function abrirRegalo(event) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = 'Felicidades'

  const newImage = document.createElement('img');
  newImage.src = 'giphy.gif';
  //newImage.src = 'https://img.freepik.com/vector-gratis/plantilla-marco-degradado-halloween_23-2149083045.jpg?w=2000';

  const container = document.querySelector('#container');
  container.innerHTML = '';
  container.appendChild(newHeader);
  container.appendChild(newImage);

}

const imagen = document.querySelector('img');
imagen.addEventListener('click',abrirRegalo);
