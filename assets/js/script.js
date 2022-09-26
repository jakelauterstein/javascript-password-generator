// ========= CREATE CHARACTER ARRAYS =========

// SPECIALS
const specialChar = []
for (i = 33; i < 48; i++) {  
  specialChar.push(String.fromCharCode(i));
 }
 for (i = 58; i < 65; i++) {
   specialChar.push(String.fromCharCode(i))
 }
 for (i = 91; i < 97; i++) {
   specialChar.push(String.fromCharCode(i))
 }
 for (i = 123; i < 127; i++) {
   specialChar.push(String.fromCharCode(i))
 }

 // NUMBERS
 const numberChar = [];
 for (i = 48; i < 58; i++) {
  numberChar.push(String.fromCharCode(i));
 }

 // UPPERCASE
 const upperCase = [];
 for (i = 65; i < 91; i++) {
  upperCase.push(String.fromCharCode(i));
 }

 // LOWERCASE
 const lowerCase = [];
 for (i = 97; i < 123; i++) {
  lowerCase.push(String.fromCharCode(i));
 }

 // CHARACTER POOL
 const allChar = [specialChar, numberChar, upperCase, lowerCase];

 // ======== END CHARACTER ARRAYS =========

let generatedPass = [];

let userNumChoice = document.querySelector('.num-input')
let submitBtn = document.querySelector('.submit-btn')
let output = document.getElementById('output')
let FormEl = document.getElementById('form-output') 

const addPassToDOM = function(output){

  let DOM_Output = document.createElement('input');
  DOM_Output.value = output;
  
  FormEl.appendChild(DOM_Output);

  output= '';
  
}

console.log(specialChar);

const createPass = function(submittedNum) {

  for(i = 0; i < submittedNum; i++) {

    let random_0_To_3 = (Math.floor(Math.random()* 4))
    console.log(random_0_To_3);

    let randomFromAllChar = allChar[random_0_To_3];
    console.log(randomFromAllChar);

    //ITERATE OVER CHARACTER ARRAYS AND ADD TO PASSWORD ARRAY

    if (i === 0) {
      let init_randomUpper = upperCase[Math.floor(Math.random() * 27)]
      generatedPass.push(init_randomUpper);
    }
    if (i === 1) {
      let init_randomLower = lowerCase[Math.floor(Math.random() * 27)]
      generatedPass.push(init_randomLower);
    }
    if (i === 2) {
      let init_randomNum = numberChar[Math.floor(Math.random() * 10)]
      generatedPass.push(init_randomNum);
    }
    if (i === 3) {
      let init_randomSpec = specialChar[Math.floor(Math.random() * 33)]
      generatedPass.push(init_randomSpec);
    }
    if (i === 4) {
      let init_randomUpper = upperCase[Math.floor(Math.random() * 27)]
      generatedPass.push(init_randomUpper);
    }
    if (i === 5) {
      let second_randomLower = lowerCase[Math.floor(Math.random() * 27)]
      generatedPass.push(second_randomLower);
    }
    if (i === 6) {
      let second_randomNum = numberChar[Math.floor(Math.random() * 10)]
      generatedPass.push(second_randomNum);
    }
    if (i === 7) {
      let second_randomSpec = specialChar[Math.floor(Math.random() * 33)]
      generatedPass.push(second_randomSpec);
    }
    if (i === 8) {
      let second_randomUpper = upperCase[Math.floor(Math.random() * 27)]
      generatedPass.push(second_randomUpper);
    }
    if (i === 9) {
      let third_randomLower = lowerCase[Math.floor(Math.random() * 27)]
      generatedPass.push(third_randomLower);
    }

    console.log(generatedPass);

    let output = generatedPass.join('');
    console.log(output);

    if (i === submittedNum - 1) {
      addPassToDOM(output);

      output = '';
      generatedPass=[];
    }
  }
}

const validateSubmit = function(){
  event.preventDefault();

  let submittedNum = userNumChoice.value;
  console.log(submittedNum);

  if ( isNaN(submittedNum) || submittedNum < 7 || submittedNum > 10 || submittedNum === null) {
    alert("You must enter a number between 7 and 10");
    userNumChoice.value = '';
    return;
  } else {
    createPass(submittedNum);
  }

  userNumChoice.value = '';
}

submitBtn.addEventListener('click', validateSubmit);;
