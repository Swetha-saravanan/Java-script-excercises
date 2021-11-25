     
      function operator() {
           event.preventDefault();
           let a = document.getElementById("number1").value;
           let b =document.getElementById("number2").value;
           console.log(a.value);
           console.log(b.value);
           let add= a.value + b.value;
           let sub=a.value - b.value;
           let multiple = a.value * b.value;
           let divison = a.value / b.value;
           let exponent=(a.value)**(b.value);
           let remainder=(a.value)%(b.value);
           if(operator=="Addition(+)") {
                document.getElementById("result").value=add.value;
           }
           else if(operator=="Subtraction") {
                document.getElementById("result").value=sub.value;
          }
           else if(operator=="Multipication") {
               document.getElementById("result").value=multiple.value;
          }
           else if(operator=="Division(/)"){
               document.getElementById("result").value=division.value;
          }
           else if(operator=="Exponent(**)") {
               document.getElementById("result").value=exponent.value;
          }
           else if(operator=="Remainder(%)") {
               document.getElementById("result").value=remainder.value;
          }
      }
    
     