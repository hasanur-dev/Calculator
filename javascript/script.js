function gethistory(){
    return document.getElementById('history-value').innerText;
 };
 
 function printhistory(num){
     document.getElementById('history-value').innerText=num;
 }
 
 function getoutput(){
     return document.getElementById('output-value').innerText;
 }
 
 function printoutput(num){
     if(num==""){
         document.getElementById("output-value").innerText=num;
     }
    else document.getElementById('output-value').innerText=getformattednumber(num);
 }
 
 function getformattednumber(num){
     if(num=="-"){
         return "";
     }
     var n = Number(num);
     var value = n.toLocaleString("en");
     return value;
 }
 function rNf(num){
  return Number(num.replace(/,/g,''));
 }
 let v = "";
 
 let operator = document.getElementsByClassName("operator");
 for(let i = 0; i < operator.length; i++){
     operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
         printhistory(v);
         printoutput(v);
        }
          else if(this.id=="backspace"){
            var output=rNf(getoutput()).toString();
            output=output.substr(0, output.length-1);
            printoutput(output);
        } else {
            let output=getoutput();
            let history=gethistory();
             if(output==""&&history!=""){
                 if(isNaN(history[history.length-1])){
                     history=history.substr(0, history.length-1);
                 }
             }
            if(output!="" || history!=""){
                output= output==""?
                output:rNf(output);
              history=history+output;
              if(this.id=="="){
                  let result = eval(history);
                  printoutput(result);
                  printhistory("");
              } 
              else {
                  history=history+this.id;
                  printhistory(history);
                  printoutput("");
              }
            }
        };
     })
 };
 
 let number = document.getElementsByClassName("number");
 for(let i=0; i<number.length; i++){
     number[i].addEventListener('click', function(){
         let output = rNf(getoutput());
         if(output!=NaN){
             output=output+this.id;
             printoutput(output);
        }
     });
 }
 
 


 