var cards1=document.querySelector(".card1");
var cards2=document.querySelector(".card2");
var cards3=document.querySelector(".card3");
var cards4=document.querySelector(".card4");
var cards5=document.querySelector(".card5");
var cards6=document.querySelector(".card6");
var cards7=document.querySelector(".card7");
var cards8=document.querySelector(".card8");
var cards9=document.querySelector(".card9");
var sr=document.querySelector("s");
var sub=document.querySelector("button");
var arr=[];
var score=0;
cards1.addEventListener('click',function a1(){
    var a=Math.floor(Math.random()*10);
    cards1.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;       
    }
    document.cards1.style.backgroundColor="red";
    });
    document.body.background="red";


cards2.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards2.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
});
cards3.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards3.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
});
cards4.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards4.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
});
cards5.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards5.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
});
cards6.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards6.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.cards6.style.backgroundColor="red";
});
cards7.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards7.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
});
cards8.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards8.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
});
cards9.addEventListener('click',function(){
    var a=Math.floor(Math.random()*10);
    cards9.textContent=a;
    arr.push(a);
    if(a in arr){
        score+=1;
    }
    document.body.style.backgroundColor="red";
    
});
sub.addEventListener('click',function(){
    alert(score);
})
console.log(score);


