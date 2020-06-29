// Activity
// score1 & score 2 are updating
let show_score1 = document.querySelector("#p1");
let show_score2 = document.querySelector("#p2");
let p1_score = 0;
let p2_score = 0;
let p1_btn = document.querySelector('#p1-btn');
let winnerScoreDisplay = document.querySelector('#winnner-score');
// console.log(pl_btn);

let max_score = 5;
//setting max player limit 
let input = document.querySelector("#max-player");
input.addEventListener('change',function(){
    winnerScoreDisplay.innerHTML=input.value;
    max_score =input.value;
    reset();
});



p1_btn.addEventListener('click', function () {
    p1_btn.classList.toggle('button-purple');
    setTimeout(function(){
        p1_btn.classList.toggle('button-purple');
    }, 80);
    
    if (p1_score < max_score && p2_score < max_score) {
        p1_score++;
        show_score1.innerHTML = `${p1_score}`;
    }
    if (p1_score == max_score) { show_score1.style.color = 'green'; }
    // p1_btn.classList.toggle('button-purple');
});
let p2_btn = document.querySelector('#p2-btn');
// console.log(p2_btn );
//player two
p2_btn.addEventListener('click', function () {
    p2_btn.classList.toggle('button-purple');
    setTimeout(function(){
        p2_btn.classList.toggle('button-purple');
    }, 80);
    if (p1_score < max_score && p2_score < max_score) {
        p2_score++;
        show_score2.innerHTML = `${p2_score}`;
    }
    if (p2_score == max_score) { show_score2.style.color = 'green'; }
});
//reset added
let resetbtn = document.querySelector('#reset-btn');
resetbtn.addEventListener('click', function () {
    reset();
});


function reset(){
    p1_score = 0;
    p2_score = 0;
    show_score1.innerHTML = `${p1_score}`;
    show_score2.innerHTML = `${p2_score}`;
    show_score1.style.color = 'black'
    show_score2.style.color = 'black'
    resetbtn.classList.toggle('button-light-blue');
    setTimeout(function(){
        resetbtn.classList.toggle('button-light-blue');
    }, 100);
}

