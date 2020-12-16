let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
const aboveWindow = document.getElementById('aboveWindow');


document.getElementById('btn_1').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '2';
  })

document.getElementById('btn_3').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '3';
  })

document.getElementById('btn_4').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = ''; 
  inputWindow.value += '4';
  })

document.getElementById('btn_5').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '5';
  })
  
document.getElementById('btn_6').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '6';
  })  

document.getElementById('btn_7').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '7';
  }) 

document.getElementById('btn_8').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '8';
  }) 

document.getElementById('btn_9').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '9';
  }) 

document.getElementById('btn_null').addEventListener('click', function () {
  if(inputWindow.value == '0') inputWindow.value = '';
  inputWindow.value += '0';
  }) 

document.querySelector("#btn_point").addEventListener('click', function () {
    if (inputWindow.value.includes('.') == false) {
        inputWindow.value += ".";
    }
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '0';
  })

document.getElementById('btn_min').addEventListener('click', function () {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'min';
        inputWindow.value = '0'; 
  })

document.getElementById('btn_multiplication').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiplication';
    inputWindow.value = '0';
  })

document.getElementById('btn_sqrt').addEventListener('click', function () {
  lastOperand = inputWindow.value;
  operation = 'sqrt';
  inputWindow.value = '';
  })

  document.getElementById('btn_divis').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divis';
    inputWindow.value = '0';
  })
  
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
      const resultTwo = parseFloat(inputWindow.value);
      const result = lastOperand + resultTwo;
      inputWindow.value = result;
      aboveWindow.value += "\n" + lastOperand + " + " + resultTwo + " = " + result;
      aboveWindow.scrollTop = aboveWindow.clientHeight;
      lastOperand = resultTwo;
    }
    if (operation === 'min'){
      const resultTwo = parseFloat(inputWindow.value);
      const result = lastOperand - resultTwo;
      inputWindow.value = result;
      aboveWindow.value += "\n" + lastOperand + " - " + resultTwo + " = " + result;
      aboveWindow.scrollTop = aboveWindow.clientHeight;
      lastOperand = resultTwo; 
    }
    if (operation === 'multiplication'){
      const resultTwo = parseFloat(inputWindow.value);
      const result = lastOperand * resultTwo;
      inputWindow.value = result;
      aboveWindow.value += "\n" + lastOperand + " * " + resultTwo + " = " + result;
      aboveWindow.scrollTop = aboveWindow.clientHeight;
      lastOperand = resultTwo;
    }
    if (operation === 'sqrt'){
      const resultTwo = parseFloat(inputWindow.value);
      const result = Math.sqrt(resultTwo) ;
      inputWindow.value = result;
      aboveWindow.value += "\n" + " √ " + resultTwo + " = " + result;
      aboveWindow.scrollTop = aboveWindow.clientHeight;
      lastOperand = resultTwo;
    }
    if (operation === 'divis'){
      const resultTwo = parseFloat(inputWindow.value);
      const result = lastOperand / resultTwo;
      inputWindow.value = result;
      aboveWindow.value += "\n" + lastOperand + " / " + resultTwo + " = " + result;
      aboveWindow.scrollTop = aboveWindow.clientHeight;
      lastOperand = resultTwo;
    }
  })


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})


