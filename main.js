const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('button');

const player1 = {
   player: 1,
   name: 'KITANA',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife'],
   attack: function () {
      console.log(`${this.name} + Fight...`);
   },
}

const player2 = {
   player: 2,
   name: 'SUBZERO',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['sword'],
   attack: function () {
      console.log(`${this.name} + Fight...`);
   },
}

function createElement(tag, className) {
   const $tag = document.createElement(tag);
   if (className) {
      $tag.classList.add(className);
   }
   return $tag;
}

function createPlayer(playerObj) {
   const $player = createElement('div', 'player' + playerObj.player);
   const $progressbar = createElement('div', 'progressbar');
   const $character = createElement('div', 'character');
   const $life = createElement('div', 'life');
   const $name = createElement('div', 'name');
   const $img = createElement('img');

   $life.style.width = playerObj.hp + '%';
   $name.innerText = playerObj.name;
   $img.src = playerObj.img;

   $player.appendChild($progressbar);
   $player.appendChild($character);
   $progressbar.appendChild($life);
   $progressbar.appendChild($name);
   $character.appendChild($img);

   return $player;
}

function randomNumberCreate() {
   const randomNumber = Math.ceil(Math.random() * 20);
   return randomNumber;
}

function changeHP(player) {
   const $playerLife = document.querySelector('.player' + player.player + ' .life');
   player.hp -= randomNumberCreate();
   $playerLife.style.width = player.hp + '%';

   if (player.hp <= 0) {
      $arenas.appendChild(playerLose(player.name));
      $playerLife.style.width = 0 + '%';
      $randomButton.disabled = true;
   }
}

function playerLose(name) {
   const $loseTitle = createElement('div', 'loseTitle');
   if (name === player1.name) {
      $loseTitle.innerText = player2.name + ' win';
      return $loseTitle;
   }
   $loseTitle.innerText = player1.name + ' win';
   return $loseTitle;
}


$randomButton.addEventListener('click', function () {
   const randomPlayerNumber = Math.ceil(Math.random() * 2);

   if (randomPlayerNumber === 1) {
      changeHP(player1);
   } else {
      changeHP(player2);
   }
   
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));