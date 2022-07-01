const $arena  = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function Hero(playerNumber, name, hp, img, weapon) {
    this.playerNumber = playerNumber;
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
    this.attack = function(){
        console.log(`${this.name} fight`);
    }
};

const player1 = new Hero(
    1,
    'Naruto',
    100,
    'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    ['lol', 'kek']
);

const player2 = new Hero(
    2,
    'Sakura',
    2,
    'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    ['SURIKEN', 'kek']
);

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
};



function createPlayer(hero) {
    console.log(hero.hp);
    const $player = createElement('div', 'player'+hero.playerNumber);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life  = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    //$life.innerText = hero.hp;
    $life.style.width = hero.hp + '%';

    $name.innerText = hero.name;

    $img.src = hero.img;

    
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    $character.appendChild($img);

    return $player;
};

function randomKick(hp) {
    return Math.ceil(Math.random() * hp);
}

function changeHp(player) {
    const $playerLife = document.querySelector('.player'+player.playerNumber + ' .life');

    const hpKick = randomKick(20);
    console.log(`${hpKick}------- минус`)
    if (player.hp-hpKick > 0) {
        player.hp -= hpKick;
    } else {
        player.hp = 0;
    }
    console.log(player.hp)
    $playerLife.style.width = player.hp + '%';
    

    if (player.hp <= 0) {
        console.log(player.name + ' fffffffffffffff')
        $arena.appendChild(playerWin(player.playerNumber))
    }
}


function changeHp(player) {
    const $playerLife = document.querySelector('.player'+player.playerNumber + ' .life');

    const hpKick = randomKick(20);
    console.log(`${hpKick}------- минус`)
    if (player.hp-hpKick > 0) {
        player.hp -= hpKick;
    } else {
        player.hp = 0;
    }
    console.log(player.hp)
    $playerLife.style.width = player.hp + '%';
    

    if (player.hp <= 0) {
        $arena.appendChild(playerWin(player.playerNumber))
    }
}

// функция из урока
// function playerLose(name) {
//     const $loseTitle = createElement('div', 'loseTitle');
//     $loseTitle.innerText = name + ' lose';
//     return $loseTitle;
// }

function playerWin(plNum) {
    console.log(player1.name + " " + player2.name)
    let name = '';
    if (plNum === 1) {
      name = player2.name;  
    } else {
      name = player1.name;
    }
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' win';

    return $loseTitle;
}

$randomButton.addEventListener('click', function(){
    changeHp(player1);
    changeHp(player2);

    if (player1.hp === 0 || player2.hp === 0) {
        console.log(player1.hp + ' ' + player2.hp)
        $randomButton.disabled = true;
        console.log('kek')
    }
})

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));