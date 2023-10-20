let gametile = [];
let usertile = [];

let btns = ['red','yellow','green','purple'];

let highscore=0;

let gamestart = false;

let level = 0;

let body = document.querySelector("body");

body.addEventListener('keypress',function(){
    if(gamestart == false){
        gamestart = true;
        levelUp();
    }
});

function levelUp(){
    level++;
    let h2 = document.querySelector('h2');
    h2.innerText = `Level ${level}`;

    let randnum = Math.floor(Math.random()*3.99);  // 0 1 2 3
    let randbtn = btns[randnum]; 
    let btnclass = document.querySelector(`.${randbtn}`);
    flash(btnclass);
    gametile.push(randbtn);
    usertile=[];
}

function flash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

let allbtn = document.querySelectorAll('.btn');
for (let btn of allbtn) {
    btn.addEventListener('click',function(){
        usertile.push(`${btn.id}`);
        check();
    });
}

function check(){
    let i = usertile.length;
    if(usertile[i-1]==gametile[i-1]){
        if(usertile.length < gametile.length){
            //
        }
        else{
            setTimeout(levelUp,300);
        }
    }
    else{
        // game over
        if(level>highscore){
            highscore = level;
            let h3 = document.querySelector('h3');
            h3.innerHTML = `Highscore: ${highscore}`;
        }
        usertile=[];
        gametile=[];
        gamestart=false;
        let h2 = document.querySelector('h2');
        h2.innerHTML = `Game Over! Your score is ${level} <br> Press any key to start again`;
        level=0;
        let body  = document.querySelector('body');
        body.style.backgroundColor = 'red';
        setTimeout(function(){
            body.style.backgroundColor = 'lightblue';
        },250);
    }
}
