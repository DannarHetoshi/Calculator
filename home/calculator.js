
let input = document.querySelector('#input');
let output = document.querySelector('#output');
let operator = document.querySelector('#operator');
let appendForm = [];
let appendRes = [];
let res = 0;
let calcOp = "";
let expressOne = null;
let expressTwo = null;


// capture button clicks for keypad, operators, clear button.
// special logic for the "=" operator to perform the operation.
// special logic for the "Clear" button to clear the fields.

function clearForm(e) {
  input.innerHTML = '';
  operator.innerHTML = '';
  output.innerHTML = '';
  appendForm = [];
  calcOp = "";
  expressOne = null;
  expressTwo = null;
}

function opBtnClick(e){
  

  if (input.innerHTML==""){
    return;
  } 
  else if (expressOne == null) { 
    expressOne = parseFloat(input.innerHTML);
    //console.log(expressOne);
    calcOp = this.innerHTML
    operator.innerHTML = calcOp;
    appendForm.push(this.innerHTML);
    output.innerHTML = input.innerHTML
    input.innerHTML = "";
    appendRes = appendForm;
    appendForm = [];
    return;
  } 
  else if (expressOne != null) {
    console.log(calcOp);
    expressTwo = parseFloat(input.innerHTML);
    const tempOp = this.innerHTML;
    //operator.innerHTML = calcOp;
    performCalculation();
    calcOp = tempOp;
    operator.innerHTML = calcOp;
    return;
    //console.log(calcOp);
  } 
  
/*   if (this.innerHTML == "=") {
//  console.log(calcOp);
    performCalculation() //call the calculation function
    calcOp = "";
    return;
  } */
}

function kpBtnClick(e){

  if (this.innerHTML != "+/-"){
    appendForm.push(this.innerHTML);
    input.innerHTML = appendForm.join('');
  }

  if (this.innerHTML == "+/-") {
    let firstChar = input.innerHTML;
    //console.log(firstChar);
    //console.log(firstChar.charAt(0));
    const arr = Array.from(firstChar);
    switch (firstChar.charAt(0)){
      default:
        arr.splice(0,0, "-");
        input.innerHTML = arr.join('');
        //console.log(arr);
        break;
      case "-":
        arr.splice(0,1);
        input.innerHTML = arr.join('');
        //console.log(arr);
        break;
    }
  } 
}

function performCalculation() {
    
    //console.log(expressOne);
    
    //console.log(expressTwo);

  switch (calcOp) { //switch for each operator
      case " + ":
          res = addition(expressOne,expressTwo);
          expressOne = res;
          output.innerHTML = expressOne;
          //operator.innerHTML = calcOp
          //console.log(calcOp);
          appendForm = [];
          expressTwo = null;
          console.log(res);
          break;
      case " - ":
          res = subtraction(expressOne,expressTwo);
          expressOne = res;
          output.innerHTML = expressOne;
          //operator.innerHTML = calcOp
          //console.log(calcOp);
          appendForm = [];
          expressTwo = null;
          console.log(res);
          break;
      case " * ":
          res = multiplication(expressOne,expressTwo);
          expressOne = res;
          output.innerHTML = expressOne;
          //operator.innerHTML = calcOp
          //console.log(calcOp);
          appendForm = [];
          expressTwo = null;
          console.log(res);
          break;
      case " / ":
          res = division(expressOne,expressTwo).toFixed(5);
          expressOne = res;
          output.innerHTML = expressOne;
          //operator.innerHTML = calcOp;
          //console.log(calcOp);
          appendForm = [];
          expressTwo = null;
          console.log(res);
          break;
      case "=":
          //operator.innerHTML = calcOp;
          appendForm = [];
          expressTwo = null;
  }
  //console.log(parseInt(calculate[0]));
  calcOp = "";
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