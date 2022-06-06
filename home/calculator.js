
let formulaApp = document.querySelector('#formula');
let resApp = document.querySelector('Eresult');
let appendForm = [];


// capture button clicks for keypad, operators, clear button.
// special logic for the "=" operator to perform the operation.
// special logic for the "Clear" button to clear the fields.

function kpBtnClick(e){
    if (this.innerHTML == "=") {
        performCalculation(e); //call the calculation function
    } else if (this.innerHTML == "Clear") {
      clearForm(); //call the clear form function
      return;
    }
    appendForm.push(this.innerHTML);
    formulaApp.innerHTML = appendForm.join('');
    //console.log(formulaApp.innerHTML);
}

function performCalculation() {
  const equation = formulaApp.innerHTML
//console.log(equation);
  const calcOp = equation.split(/[0-9$\s$]/).join('');
  const calculate = Array.from(equation.split(/[^0-9]+\s/));
  const calc1 = parseInt(calculate.slice(0));
  const calc2 = parseInt(calculate.slice(1));
  let res = 0;
/*console.log(calc1);
  console.log(calcOp);
  console.log(calc2); */
  
  switch (calcOp) { //switch for each operator
      case "+":
          res = addition(calc1,calc2);
          resApp.innerHTML = String("= " + res);
//        console.log(res);
          break;
      case "-":
          res = subtraction(calc1,calc2);
          resApp.innerHTML = String("= " + res);
//        console.log(res);
          break;
      case "*":
          res = multiplication(calc1,calc2);
          resApp.innerHTML = String("= " + res);
//        console.log(res);
          break;
      case "/":
          res = division(calc1,calc2).toFixed(5);
          resApp.innerHTML = String("= " + res);
//        console.log(res);
          break;
  }
  //console.log(parseInt(calculate[0]));

  return;
}

function clearForm() {
  formulaApp.innerHTML = '';
  appendForm = [];
  resApp.innerHTML = '';
}

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

const kpButtons = document.querySelectorAll('button');
kpButtons.forEach(button => button.addEventListener('click', kpBtnClick));


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