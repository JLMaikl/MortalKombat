
 const player1 = {
   name: 'Gerold',
   hp: 25,
   img: 'str',
   weapon: ['knife'],
   attack: function() {
       console.log(`${this.name} + Fight...`);
   },
}


function createPlayer (playerClass, playerName, playerHp) {
   const $player1 = document.createElement('div');
   $player1.classList.add('player1');
   const $progressbar = document.createElement('div');
   $progressbar.classList.add('progressbar');
   const $character = document.createElement('div');
   $character.classList.add('character');
   const $life = document.createElement('div');
   $life.style.width = '100%';
   $life.classList.add('life');
   const $name = document.createElement('div');
   $name.innerText = playerName;
   $name.classList.add('name');
   const $img = document.createElement('img');
   $img.src= 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

   $player1.appendChild($progressbar);
   $player1.appendChild($character);
   $progressbar.appendChild($life);
   $character.appendChild($img);

   const $arenas = document.querySelector('.arenas');
   $arenas.appendChild($player1);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);
