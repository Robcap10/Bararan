"use strict";

const dictonary = ["общество", "дом", 'показатель' ];
const answer = ["հասարակություն", "Տուն", 'Ցուցանիշ'];
const button = document.getElementById('button')
// for (let i = 0; i < dictonary.length; i++) {
//   if (userInput === answer[i].toLowerCase()) {
//     alert("Այո");
//   } else {
//     alert(`voch chisht patasxann e ${answer[0]}`);
//     break;
//   }
// }
button.addEventListener('click', function(){
    let i = 0;
    while (i < dictonary.length) {
      let userInput = prompt(`${dictonary[i]}`).toLowerCase();
      if (userInput === answer[i].toLowerCase()) {
        alert("Այո");
        i++;
      } else {
        alert(`voch chisht patasxann e ${answer[i]}`);
        i++
      }
    }
})
