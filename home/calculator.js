
let formulaApp = document.querySelector('#formula');
let resApp = document.querySelector('#result');
let appendForm = [];
let appendRes = [];
let res = 0;
let calcOp = "";

// capture button clicks for keypad, operators, clear button.
// special logic for the "=" operator to perform the operation.
// special logic for the "Clear" button to clear the fields.

function clearForm(e) {
  formulaApp.innerHTML = '';
  appendForm = [];
  resApp.innerHTML = '';
}

function opBtnClick(e){
  if (this.innerHTML == "=") {
//  console.log(calcOp);
    performCalculation(e) //call the calculation function
  } else if (resApp.innerHTML == "" && this.innerHTML != "=") {
    calcOp = this.innerHTML;
    appendForm.push(this.innerHTML);
    formulaApp.innerHTML = appendForm.join('');
  } else if (resApp.innerHTML != "" && this.innerHTML != "=") {
    calcOp = this.innerHTML;
    appendForm = appendRes;
    appendRes.push(this.innerHTML);
    formulaApp.innerHTML = (resApp.innerHTML + appendRes.join(''));
  }
}

function kpBtnClick(e){

  if (resApp.innerHTML == "" && this.innerHTML != "+/-") {
    //console.log(this.innerHTML);
    appendForm.push(this.innerHTML);
    formulaApp.innerHTML = appendForm.join('');
    //console.log(formulaApp.innerHTML); */
  } else if (resApp.innerHTML != "" && this.innerHTML != "+/-") {
    //console.log(appendForm);
    //console.log(appendRes);
    appendForm = appendRes;
    appendRes.push(this.innerHTML);
    formulaApp.innerHTML = (resApp.innerHTML + appendRes.join(''));

  } else if (this.innerHTML == "+/-") {
    if (formulaApp.innerHTML != "") {
      appendForm = appendRes;
      formulaApp.innerHTML = (resApp.innerHTML + appendRes.join(''));
      let firstChar = formulaApp.innerHTML;
    }
    
    let firstChar = formulaApp.innerHTML;
    //console.log(firstChar);
    //console.log(firstChar.charAt(0));
    const arr = Array.from(firstChar);
    switch (firstChar.charAt(0)){
      default:
        arr.splice(0,0, "-");
        formulaApp.innerHTML = arr.join('');
        //console.log(arr);
        break;
      case "-":
        arr.splice(0,1);
        formulaApp.innerHTML = arr.join('');
        //console.log(arr);
        break;
    }
  }
}

function prepareCalc() {
  formulaApp.innerHTML = resApp.innerHTML.split(/[^0-9]+\s/).join('');
  const calc1 = parseFloat(formulaApp.innerHTML);
  //console.log(resApp.innerHTML);
  //console.log(this);
  appendForm.push(this.innerHTML);
  formulaApp.innerHTML = appendForm.join('');
  
}

function performCalculation() {

  const equation = formulaApp.innerHTML
//  console.log(equation);
  const calculate = Array.from(equation.split(/[+-]?[^\d]+\.?\s/));
//  console.log(calculate);

  const calc1 = parseFloat(calculate.slice(0));
//  console.log(calc1)

//  console.log(calcOp);

  const calc2 = parseFloat(calculate.slice(1));
//  console.log(calc2);

  
  switch (calcOp) { //switch for each operator
      case " + ":
          res = addition(calc1,calc2);
          resApp.innerHTML = res;
          appendRes = [];          
          console.log(res);
          break;
      case " - ":
          res = subtraction(calc1,calc2);
          resApp.innerHTML = res;
          appendRes = [];
          console.log(res);
          break;
      case " * ":
          res = multiplication(calc1,calc2);
          resApp.innerHTML = res;
          appendRes = [];
          console.log(res);
          break;
      case " / ":
          res = division(calc1,calc2).toFixed(5);
          resApp.innerHTML = res;
          appendRes = [];
          console.log(res);
          break;
  }
  //console.log(parseInt(calculate[0]));

  return;
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

const kpButtons = document.querySelectorAll('button.kpBtn');
kpButtons.forEach(button => button.addEventListener('click', kpBtnClick));
const opButtons = document.querySelectorAll('button.opBtn')
opButtons.forEach(button => button.addEventListener('click', opBtnClick));
const clrBtn = document.querySelector('button.clearBtn');
clrBtn.addEventListener('click', clearForm);


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