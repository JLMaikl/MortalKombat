
 const player1 = {
   name: 'KITANA',
   hp: 80,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife'],
   attack: function() {
       console.log(`${this.name} + Fight...`);
   },
}

const player2 = {
   name: 'SUBZERO',
   hp: 90,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['sword'],
   attack: function() {
       console.log(`${this.name} + Fight...`);
   },
}

const $arenas = document.querySelector('.arenas');

function createPlayer (playerClass, player) {
   const $player1 = document.createElement('div');
   $player1.classList.add(`${playerClass}`);

   const $progressbar = document.createElement('div');
   $progressbar.classList.add('progressbar');

   const $character = document.createElement('div');
   $character.classList.add('character');

   const $life = document.createElement('div');
   $life.style.width = player.hp + '%';
   $life.classList.add('life');

   const $name = document.createElement('div');
   $name.classList.add('name');
   $name.innerText = player.name;

   const $img = document.createElement('img');
   $img.src= player.img;

   $player1.appendChild($progressbar);
   $player1.appendChild($character);
   $progressbar.appendChild($life);
   $progressbar.appendChild($name);
   $character.appendChild($img);
   

   
   $arenas.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
