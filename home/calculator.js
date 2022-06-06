
let formulaApp = document.querySelector('#formula');
let res = 0;
let calculate = [];

let calc1 = "";
let calcOp = 0;
let calc2 = "";
let appendForm = [];

function kpBtnClick(e){
    if (this.innerHTML == "=") {
        const equation = formulaApp.innerHTML
        console.log(equation);
        calcOp = equation.split(/[0-9$\s$]/).join('');
        calculate = Array.from(equation.split(/[^0-9]+\s/));
        
        calc1 = parseInt(calculate.slice(0));
        calc2 = parseInt(calculate.slice(1));
        
        console.log(calc1);
        console.log(calcOp);
        console.log(calc2);
        
        switch (calcOp) {
            case "+":
                res = addition(calc1,calc2);
                document.querySelector('#result').innerHTML = String("= " + res);
                console.log(res);
                break;
            case "-":
                res = subtraction(calc1,calc2);
                document.querySelector('#result').innerHTML = String("= " + res);
                console.log(res);
                break;
            case "x":
                res = multiplication(calc1,calc2);
                document.querySelector('#result').innerHTML = String("= " + res);
                console.log(res);
                break;
            case "/":
                res = division(calc1,calc2).toFixed(5);
                document.querySelector('#result').innerHTML = String("= " + res);
                console.log(res);
                break;
        }
        //console.log(parseInt(calculate[0]));

        return;
    }
    
    appendForm.push(this.innerHTML);
    formulaApp.innerHTML = appendForm.join('');
    //console.log(formulaApp.innerHTML);
}


const kpButtons = document.querySelectorAll('button');
kpButtons.forEach(button => button.addEventListener('click', kpBtnClick));

function addition(a,b) {
  return (a+b);
  };
  
function subtraction(a,b) {
  return (a-b);
};
  
function multiplication(a,b) {
  return (a*b);
}

function division(a,b){
  return (a/b);
}

  /*const sum = function(arr) {
    const sum = arr.reduce((total, a) => total + a, 0);
    return sum;
  };*/
  
  /*const multiply = function(arr) {
    const product = arr.reduce((total, a) => total*a, 1)
    return product;
  };*/
  
  /*const power = function(a,b) {
    return (a**b);
      
  };*/
  
  /*const factorial = function(a) { 
    let fact = a
    if (fact < 2) {
      return 1;
    }
    for (i = a; i>1; i--) {
      fact *= (i-1);
    }
    return fact;
  };*/