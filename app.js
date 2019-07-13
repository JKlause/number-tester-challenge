import isEven from './is-even.js';

// referenced elements from index.html
const userInput = document.getElementById('user-input');
const button = document.getElementById('button');

const evenImage = document.getElementById('even-image');
const oddImage = document.getElementById('odd-image');

const evenMsg = document.getElementById('even-message');
const oddMsg = document.getElementById('odd-message');
const zeroMsg = document.getElementById('zero-message');
const noInputMsg = document.getElementById('no-input-message');

// wire it up!
button.onclick = function() {
         // If user doesn't enter anything...
    if(userInput.value === '') {
        evenImage.classList.add('hidden');
        evenMsg.classList.add('hidden');
        oddImage.classList.add('hidden');
        oddMsg.classList.add('hidden');
        zeroMsg.classList.add('hidden');
        noInputMsg.classList.remove('hidden');
    }    //if user enters 0 
      else if (Number(userInput.value) === 0) {
        evenImage.classList.add('hidden');
        evenMsg.classList.add('hidden');
        oddImage.classList.add('hidden');
        oddMsg.classList.add('hidden');
        zeroMsg.classList.remove('hidden');
        noInputMsg.classList.add('hidden');
    }    //if user enters a number
      else {  
        const result = isEven(Number(userInput.value));
        if(result === true) {
            evenImage.classList.remove('hidden');
            evenMsg.classList.remove('hidden');
            oddImage.classList.add('hidden');
            oddMsg.classList.add('hidden');
            zeroMsg.classList.add('hidden');
            noInputMsg.classList.add('hidden');
        } else {
            evenImage.classList.add('hidden');
            evenMsg.classList.add('hidden');
            oddImage.classList.remove('hidden');
            oddMsg.classList.remove('hidden');
            zeroMsg.classList.add('hidden');
            noInputMsg.classList.add('hidden');
        }
    };
}; 