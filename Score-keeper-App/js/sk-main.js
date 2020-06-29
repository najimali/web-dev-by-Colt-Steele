// Activity
// score1 & score 2 are updating
let show_score1 = document.querySelector("#score1");
let show_score2 = document.querySelector("#score2");
let p1_score = 0;
let p2_score = 0;
let p1_btn = document.querySelector('#p1-btn');
let show_max_limit = document.querySelector('#maxscore');
// console.log(pl_btn);

let max_score=5;
//setting max player limit 
let input =document.querySelector("#max-player");
if(input===null){

    max_score=5;}
else{
    input.addEventListener('input',function(){
        // if(max_player!==null)
        console.log(input.value);
         max_score=input.value;
         show_max_limit.innerHTML=`Playing to: ${max_score}`;
    });
}



p1_btn.addEventListener('click', function () {

    if (p1_score < max_score && p2_score < max_score) {
        p1_score++;
        show_score1.innerHTML = `${p1_score}`;
    }
    if (p1_score == max_score) { show_score1.style.color = 'green'; }
});
let p2_btn = document.querySelector('#p2-btn');
// console.log(p2_btn );
//player two
p2_btn.addEventListener('click', function () {
    if (p1_score < max_score && p2_score < max_score) {
        p2_score++;
        show_score2.innerHTML = `${p2_score}`;
    }
    if (p2_score == max_score) { show_score2.style.color = 'green'; }
});
//reset added
let reset = document.querySelector('#reset-btn');
reset.addEventListener('click', function () {
    p1_score = 0;
    p2_score = 0;
    show_score1.innerHTML = `${p1_score}`;
    show_score2.innerHTML = `${p2_score}`;
    show_score1.style.color ='black'
    show_score2.style.color ='black'
});

