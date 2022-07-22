const $arena  = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control')
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};
const $chat = document.querySelector('.chat');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

class Hero {
    constructor(player, name, hp, img, weapon) {
        this.player = player;
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
        this.attack = function () {
            console.log(`${this.name} fight`);
        };
        this.changeHP = function (hp) {
            if (this.hp > 0 && this.hp > hp) {
                this.hp -= hp;
            } else {
                this.hp = 0;
            }

        };
        this.elHP = function () {
            return document.querySelector('.player' + this.player + ' .life');
        };
        this.renderHP = function () {
            return this.elHP().style.width = this.hp + '%';
        };
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

function getRandom(maxDamage) {
    return Math.ceil(Math.random() * maxDamage);
}

function createPlayer(hero) {
    const $player = createElement('div', 'player'+hero.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life  = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

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

// function changeHP(player){
//     const $playerLife = document.querySelector('.player' + player.playerNumber + ' .life');
//     player.hp -= getRandom(20);

//     $playerLife.style.width = player.hp + '%';

//     if (player.hp <= 0) {
//         player.hp = 0;
//     }

//     $playerLife.style.width = player.hp + '%';
// }

// $randomButton.addEventListener('click', function(){
//     // changeHP(player1);
//     // changeHP(player2);

//     player1.changeHP(getRandom(20));
//     player2.changeHP(getRandom(20));
//     player1.renderHP();
//     player2.renderHP();

//     if (player1.hp === 0 || player2.hp === 0) {
//         $randomButton.disabled = true;
//         $arena.appendChild(createReloadButton());
//     }

//     if (player1.hp === 0 && player1.hp < player2.hp) {
//         $arena.appendChild(playerWins(player2.name));
//     } else if (player2.hp === 0 && player2.hp < player1.hp) {
//         $arena.appendChild(playerWins(player1.name));
//     } else if (player1.hp === 0 && player2.hp === 0) {
//         $arena.appendChild(playerWins());
//     }
// })

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadButton = $reloadWrap.appendChild(createElement('button', 'button'));
    
    $reloadButton.innerText = 'Restart';
    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    });

    return $reloadWrap;
};

function enemyAttack() {
    const hit = ATTACK[getRandom(3)-1];
    const defence = ATTACK[getRandom(3)-1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
};

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));


function playerAttack() {
    const attack = {};
    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        
        item.checked = false;
        
    }
    return attack;
}

function showResult() {
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        $arena.appendChild(createReloadButton());
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arena.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arena.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arena.appendChild(playerWins());
    }
}

function getTime() {
    const date = new Date();
    time = `${date.getHours()}:${date.getMinutes()}`;
    return time;
};

function startLogs() {
    const startText = logs['start'].replace('[time]', getTime())
    .replace('[player1]', player1.name)
    .replace('[player2]', player2.name);
    // return startText;
    $chat.insertAdjacentHTML('afterbegin', `<p>${startText}</p>`)
};

function generateLogs(type, player1, player2) {
    
    // const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
    // const el = `<p>${text}</p>`;
    // $chat.insertAdjacentHTML('afterbegin', el);



}
$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    
    const attack = playerAttack();

    if (attack.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        //generateLogs('hit', player2, player1)

    }

    if (enemy.defence !== attack.hit) {
        player2.changeHP(attack.value);
        player2.renderHP();
        //generateLogs('hit', player1, player2)

    }

    showResult()
});


startLogs();