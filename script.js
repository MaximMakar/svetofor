const Button =document.querySelector('.button');
const ButtonCircle=document.querySelector('.buttonCircle');
const butText=document.querySelector('.butText');

const time = 1000;
let timer=10;

let ColorIndex=0;
buttonFlag=0;

const Circle1=document.querySelector('.Circle1');
const Circle2=document.querySelector('.Circle2');
const Circle3=document.querySelector('.Circle3');
const Timer1=document.querySelector('.timer1');
const Timer2=document.querySelector('.timer2');
const Timer3=document.querySelector('.timer3');

function updBut(){
  buttonFlag+=1;
  if (buttonFlag>1) {
    buttonFlag=0;
  }
  if (buttonFlag==1){
     updateButton();
     timerId=setInterval(function upd(){updateButton(); updateTimer(buttonFlag)} ,time);
   }
  if (buttonFlag==0){
    updateButton();
    updateTimer(buttonFlag);
    clearInterval(timerId);
     }
  }

function updateTimer(buttonFlag){
 if (buttonFlag==1){
  if (ColorIndex==0){
  timer+=1;
  ColorIndex=1;
 }
 timer=timer-1;
 if (timer==0){
  if (ColorIndex==1){timer=4;ColorIndex=ColorIndex+1;}
  else{timer=10; ColorIndex=ColorIndex+1;}
   if (ColorIndex>3) {
      ColorIndex=1;
    }
 }
 
}
if (buttonFlag==0){
  ColorIndex=0;
  timer=10;
   }
    updateColor(ColorIndex,timer);
}

function updateColor(ColorIndex,timer) 
{
  if (ColorIndex==1){
    Circle1.style.borderColor = '#ff643d';
    Circle2.style.borderColor = '#808080';
    Circle3.style.borderColor = '#808080';
    Timer1.innerHTML=(timer);
    Timer2.innerHTML=("");
    Timer3.innerHTML=("");
    Timer1.style.color='#ff643d';
    Timer2.style.color='#808080';
    Timer3.style.color='#808080';}

  if (ColorIndex==2){
    Circle2.style.borderColor = '#fcff61';
    Circle1.style.borderColor = '#808080';
    Circle3.style.borderColor = '#808080'; 
    Timer2.innerHTML=(timer);
    Timer1.innerHTML=("");
    Timer3.innerHTML=("");
    Timer1.style.color='#808080';
    Timer2.style.color='#fcff61';
    Timer3.style.color='#808080';
  }

  if (ColorIndex==3){
    Circle3.style.borderColor = '#47ff4e';
    Circle1.style.borderColor = '#808080';
    Circle2.style.borderColor = '#808080';
    Timer3.innerHTML=(timer);
    Timer1.innerHTML=("");
    Timer2.innerHTML=("");
    Timer3.style.color='#47ff4e';
    Timer1.style.color='#808080';
    Timer2.style.color='#808080';}

  if (ColorIndex==0){
   Circle1.style.borderColor = '#808080';
   Circle2.style.borderColor = '#808080';
   Circle3.style.borderColor = '#808080';
    Timer3.innerHTML=("");
    Timer1.innerHTML=("");
    Timer2.innerHTML=("");
    Timer3.style.color='#808080';
    Timer1.style.color='#808080';
    Timer2.style.color='#808080';}
   }



  

function updateButton()
{
  if (buttonFlag==0){
    ButtonCircle.style.backgroundColor = '#ff643d';
    butText.innerHTML=("off");
    ButtonCircle.style.marginLeft="10px";
  }
  if (buttonFlag==1){
    ButtonCircle.style.backgroundColor = '#47ff4e';
    butText.innerHTML=("on");
    ButtonCircle.style.marginLeft="60px";
  }
}
 
updateButton();
updateColor(0,10);
 Button.addEventListener("click",updBut);
