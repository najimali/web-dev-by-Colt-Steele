// Activity
// score1 & score 2 are updating
let show_score1 = document.querySelector("#score1");
let show_score2 = document.querySelector("#score2");
let p1_score=0;
let p2_score=0;
let p1_btn = document.querySelector('#p1-btn');
// console.log(pl_btn);

let max_score =5;

p1_btn.addEventListener('click',function(){
    
    if(p1_score<max_score &&p2_score<max_score){
        p1_score++;
    show_score1.innerHTML=`${p1_score}`;
    }
    if(p1_score==max_score){show_score1.style.color='green';}
});
let p2_btn = document.querySelector('#p2-btn');
// console.log(p2_btn );
//player two
p2_btn.addEventListener('click',function(){
    if(p1_score<max_score &&p2_score<max_score){
        p2_score++;
    show_score2.innerHTML=`${p2_score}`;
    }
    if(p2_score==max_score){show_score2.style.color='green';}
});