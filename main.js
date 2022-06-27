const $arena  = document.querySelector('.arenas');


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
    'SaSUKE',
    100,
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

    $life.innerText = hero.hp;
    $life.style.width = '100%';

    $name.innerText = hero.name;

    $img.src = hero.img;

    
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    $character.appendChild($img);

    return $player;
};

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));