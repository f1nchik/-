//привязка слов к js
import ruswords from './words.js'
let secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
//  secretWord = 'дом' 
let imgnum = 0
let img = document.getElementById('img')
let win = document.getElementById('win')
let newGameBtn = document.getElementById('newGameBtn')
console.log(newGameBtn);
newGameBtn.onclick = function (event) {
   event.preventDefault()
   win.style.opacity = 0;
   hints.innerHTML = 'Вводи букву и нажимай проверить!'
   playerInput.value = ''
   check.disabled = false
   secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
   shifr.innerHTML = '_'.repeat(secretWord.length)
   imgnum = 0
   img.src = 'hangman0.png'
   letters = []
}
win.style.opacity = 0;
//переменная 'shifr'
let shifr = document.getElementById('shifr')
// сколько '-'столько букв
shifr.innerHTML = '_'.repeat(secretWord.length)
let letters = []
//переменная 'check'
let check = document.getElementById('check')
//выводятся в консоли слова
console.log(check)
check.onclick = function (event) {
   playerInput.select()
   //что бы страница не обновлялась
   event.preventDefault()
   console.log(playerInput.value);
   if (!letters.includes(playerInput.value)) {

      letters.push(playerInput.value)
      // если секретное слово включает в себя значение инпута
      if (secretWord.includes(playerInput.value)) {
         console.log('yes');
         let newshifr = ''
         for (let i = 0; i < secretWord.length; i = i + 1) {
            console.log(i);
            if (letters.includes(secretWord[i])) {
               console.log(secretWord[i]);
               newshifr = newshifr + secretWord[i]
            }
            // if(letters==secretWord){
               
               // }
               else {
                  console.log('_');
                  newshifr = newshifr + ('_')
               }
            }
            shifr.innerHTML = newshifr
            hints.innerHTML = letters 
            if(!newshifr.includes('_')){
               console.log('yes!!!!')
                  win.style.opacity = 1
         }
      }
      else {
         console.log('no');
         imgnum = imgnum + 1
         img.src = 'hangman' + imgnum + '.png'
         hints.innerHTML = letters
         if (imgnum == 6) {

            check.disabled = true
            hints.innerHTML = 'секретное слово было ' + secretWord
         }
      }
   }
}
// for(let i=2;i<64;i=i*2){
//    console.log(i);
// }