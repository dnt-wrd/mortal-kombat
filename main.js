function Hero(name, hp, img, weapon) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
    this.attack = function(){
        console.log(`${this.name} fight`);
    }
};

const player1 = new Hero(
    'Naruto',
    100,
    'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    ['lol', 'kek']
);

const player2 = new Hero(
    'SaSUKE',
    100,
    'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    ['SURIKEN', 'kek']
);



function createPlayer(player, hero) {
    const $arena  = document.querySelector('.arenas');

    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life  = document.createElement('div');
    $life.classList.add('life');
    $life.innerText = hero.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = hero.name;

    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = hero.img;

    $arena.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    $character.appendChild($img);
};

createPlayer('player1', player1);
createPlayer('player2', player2);