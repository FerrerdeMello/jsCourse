//const yourName = prompt('Inform your name: ');

yourName = 'Joel Ferrer de Mello';

window.document.body.innerHTML += `<b>Your name is: </b>${yourName}<br><br>`;
window.document.body.innerHTML += `<b>My Your name have </b>${yourName.length} <b>letters. </b><br><br>`;
window.document.body.innerHTML += `<b>The second letter in your name is: </b>${yourName[1]}<br><br>`;
window.document.body.innerHTML += `<b>What is the first index of the letter "E" in your name? </b>${yourName.indexOf('e')}<br><br>`;
window.document.body.innerHTML += `<b>What is the last index of the letter "E" in your name? </b>${yourName.lastIndexOf('e')}<br><br>`;
window.document.body.innerHTML += `<b>What is the 3 last letters in your name? </b>${yourName.slice(yourName.length-3)}<br><br>`;
window.document.body.innerHTML += `<b>The words in your name are: </b>${yourName.split(' ')}<br><br>`;
window.document.body.innerHTML += `<b>Your name in uppercase: </b>${yourName.toUpperCase()}<br><br>`;
window.document.body.innerHTML += `<b>Your name in lowercase: </b>${yourName.toLowerCase()}<br><br>`;


console.log(yourName.split(' ')); // divid by a values

lastName = yourName.split(' ');

window.document.body.innerHTML += `<b>How many words have in your name: </b>${lastName.length}<br><br>`;
window.document.body.innerHTML += `<b>Your Last Name is : </b>${lastName[lastName.length-1]}<br><br>`;
