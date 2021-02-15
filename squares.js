var btn = document.getElementById('botao')

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   var newColor = getRandomColor();

btn.onclick = function () {
    var newSquare = document.createElement('div');
    newSquare.setAttribute('class', 'square');

    newSquare.style.height = '100px';
    newSquare.style.width = '100px';
    newSquare.style.backgroundColor = '#F00';
    newSquare.style.marginBottom = '10px';

    var containerElement = document.querySelector('#container');
    containerElement.appendChild(newSquare);
    
    newSquare.onmouseover = function() {
        newSquare.style.backgroundColor = getRandomColor();
    }
}

