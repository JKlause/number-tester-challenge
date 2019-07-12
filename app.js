import isEven from './is-even.js';

// referenced elements from index.html
const userInput = document.getElementById('user-input');
const button = document.getElementById('button');

const evenImage = document.getElementById('even-image');
const oddImage = document.getElementById('odd-image');

const evenMsg = document.getElementById('even-message');
const oddMsg = document.getElementById('odd-message');
const zeroMsg = document.getElementById('zero-message');

// wire it up!
button.onclick = function() {
    if (Number(userInput.value) === 0) {
        zeroMsg.classList.remove('hidden');
        evenImage.classList.add('hidden');
        evenMsg.classList.add('hidden');
        oddImage.classList.add('hidden');
        oddMsg.classList.add('hidden');
    } else { 
        const result = isEven(Number(userInput.value));
        if(result === true) {
            evenImage.classList.remove('hidden');
            evenMsg.classList.remove('hidden');
            oddImage.classList.add('hidden');
            oddMsg.classList.add('hidden');
            zeroMsg.classList.add('hidden');
        } else {
            evenImage.classList.add('hidden');
            evenMsg.classList.add('hidden');
            oddImage.classList.remove('hidden');
            oddMsg.classList.remove('hidden');
            zeroMsg.classList.add('hidden');
        }
    }; 
};