

let themeChanger = document.getElementById('theme-changer');
let theme= document.getElementById('theme').innerHTML;
 function the(){
      if(theme==""){
          theme2()
        theme="two";

      }
      else if(theme=="two"){
          theme3()
          theme="three";
      }
      else{
          theme1()
          theme="";
      }
 }

let circle = document.getElementById('theme-changer');
// let body = document.getElementsByTagName('body');
let btn = document.getElementsByTagName('button');
console.log(btn);


function theme1(){
    circle.style.cssText="left:4px; background-color: hsl(6, 63%, 50%)";
    document.body.style.cssText= "background-color:hsl(222, 26%, 31%)";
    document.getElementById('calc').style.cssText="color:hsl(0, 0, 100%)";
    document.getElementById('calc-side').style.cssText="color:hsl(0, 0, 100%)";
    document.getElementById('themenumbers').style.cssText="color:hsl(0, 0, 100%)";
    document.getElementById('themebackground').style.cssText="background-color:hsl(223, 31%, 20%)";
    document.getElementById('output-value').style.cssText="color:hsl(0, 0, 100%)";
    document.getElementById('history-value').style.cssText="color:hsl(0, 0, 100%)";
    document.getElementById('screen').style.cssText="background-color:hsl(224, 36%, 15%)";
    document.getElementById('keyboard').style.cssText="background-color: hsl(223, 31%, 20%)";
    document.getElementById('1').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('2').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('3').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('4').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('5').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('6').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('7').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('8').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('9').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('+').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('-').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('*').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('/').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('.').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('0').style.cssText="background-color:hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('clear').style.cssText="background-color: hsl(225, 21%, 49%); color:hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(224, 28%, 35%)";
    document.getElementById('backspace').style.cssText="background-color: hsl(225, 21%, 49%); color:hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(224, 28%, 35%)";
    document.getElementById('=').style.cssText="background-color:hsl(6, 63%, 50%); color:hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(6, 70%, 34%))";   
}

function theme2(){
   circle.style.left="1.16rem";
    document.body.style.cssText= "background-color:hsl(0, 0%, 90%)";
    document.getElementById('calc').style.cssText="color:hsl(60, 10%, 19%)";
    document.getElementById('calc-side').style.cssText="color:hsl(60, 10%, 19%)";
    document.getElementById('themenumbers').style.cssText="color:hsl(60, 10%, 19%)";
    document.getElementById('themebackground').style.cssText="background-color:hsl(0, 5%, 81%)";
    document.getElementById('output-value').style.cssText="color:hsl(60, 10%, 19%)";
    document.getElementById('history-value').style.cssText="color:hsl(60, 10%, 19%)";
    document.getElementById('screen').style.cssText="background-color:hsl(0, 0%, 93%)";
    document.getElementById('keyboard').style.cssText="background-color: hsl(0, 5%, 81%)";
    document.getElementById('1').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('2').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('3').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('4').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('5').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('6').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('7').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('8').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('9').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('+').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('-').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('*').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('/').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('.').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('0').style.cssText="background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0px 0.18rem hsl(35, 11%, 61%)";
    document.getElementById('clear').style.cssText="background-color: hsl(185, 42%, 37%); color: hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(185, 58%, 25%)";
    document.getElementById('backspace').style.cssText="background-color: hsl(185, 42%, 37%); color: hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(185, 58%, 25%)";
    document.getElementById('=').style.cssText="background-color: hsl(25, 98%, 40%); color: hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(25, 99%, 27%)";



}

function theme3(){
    circle.style.cssText="left:35px; background-color: hsl(176, 100%, 44%)";
    document.body.style.cssText= "background-color:hsl(268, 75%, 9%)";
    document.getElementById('calc').style.cssText="color:hsl(52, 100%, 62%)";
    document.getElementById('calc-side').style.cssText="color:hsl(52, 100%, 62%)";
    document.getElementById('themenumbers').style.cssText="color:hsl(52, 100%, 62%)";
    document.getElementById('themebackground').style.cssText="background-color:hsl(268, 71%, 12%)";
    document.getElementById('output-value').style.cssText="color:hsl(52, 100%, 62%)";
    document.getElementById('history-value').style.cssText="color:hsl(52, 100%, 62%)";
    document.getElementById('screen').style.cssText="background-color:hsl(268, 71%, 12%)";
    document.getElementById('keyboard').style.cssText="background-color: hsl(268, 71%, 12%)";
    document.getElementById('1').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('2').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('3').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('4').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('5').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('6').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('7').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('8').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('9').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('0').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('+').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('-').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('*').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('/').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('.').style.cssText="background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0px 0.18rem hsl(290, 70%, 36%)";
    document.getElementById('clear').style.cssText="background-color: hsl(281, 89%, 26%); color: hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(285, 91%, 52%)";
    document.getElementById('backspace').style.cssText="background-color: hsl(281, 89%, 26%); color: hsl(0, 0, 100%); box-shadow: 0px 0.18rem hsl(285, 91%, 52%)";
    document.getElementById('=').style.cssText="background-color:hsl(176, 100%, 44%); color: hsl(198, 20%, 13%); box-shadow: 0px 0.18rem hsl(177, 92%, 70%)";
}