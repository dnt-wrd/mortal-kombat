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
    10,
    'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    ['lol', 'kek']
);

const player2 = new Hero(
    2,
    'SaSUKE',
    1,
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

function getRandom(maxDamage) {
    return Math.ceil(Math.random() * maxDamage);
}

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




function playerWins(name) {
    const $loseTitle = createElement('div', 'winTitle');

    if (name) {
        $loseTitle.innerText = name + ' wins';
    } else {
        $loseTitle.innerText = 'draw';
    }
    

    return $loseTitle;
}

function changeHP(player){
    const $playerLife = document.querySelector('.player' + player.playerNumber + ' .life');
    player.hp -= getRandom(20);

    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        player.hp = 0;
    }

    $playerLife.style.width = player.hp + '%';
}

$randomButton.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arena.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arena.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arena.appendChild(playerWins());
    }
})

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));