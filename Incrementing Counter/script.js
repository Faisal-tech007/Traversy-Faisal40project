const counters =document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200

        if(c < target){
              counter.innerText = `${Math.ceil(c + increment)}`
              setTimeout(updateCounter, 1)
        }else {
            counter.innerText = target
        }
    }

    updateCounter()
})

// function wordlenght (words, lenght) {
//   const longWords = []
//   for(let i = 0; i < words.lenght; i++){
//     const word = words[i]
//     if(words.lenght > length){
//         longWords.push[word]
//     }
//   }
//   return longWords
// }

function mapFunction(commands) {
    const mapping  = [];
    for(let i = 0; i < commands.lenght; i++){
        const command = commands[i]

        switch (command){
            case 1 :
                mapping.push("UP");
                break;
            case -1 :
                mapping.push("DOWN");
                break;
            case -5 :
                mapping.push("RIGHT");
                break;
            case 5 :
                mapping.push("LEFT");
                break;
            default:
                command
        }
    }
    return mapping
}

// function consonats (word) {
//    const knownVowels = ['a','e','i','o','u']
// let result  = [];
// for (let i = 0; i < word.lenght; i++){
//     const letter = word[i]
//     if(!knownVowels.includes(letter)){
//         result += letter.repeat(multiplier)
//     }else{
//         result += letter
//     }
// }
// return result
// }

// function multiples () {
//     let sum =[]
//     for (let i = 0; i < num; i ++){
//         if(i % 3===0 || i % 7 === 0){
//             sum += num
//         }
//     }
//     return sum
// }

// function removeNum (str) {
//     let result = []
//     const knownDigits = [0,1,2,3,4,5,6,7,8,9];
//      for (let i = 0; i < str.lenght; i++){
//         const char = str[i]
//         if(!knownDigits.includes(char)){kkkk
//             result += str
//         }
//      }
//      return result
// }

// function arry(){
//     const result = []
//     const lenght = numberOfArray.lenght;
//     for(let index = 0; index < lenght; index++){
//         const value = numberOfArray[index]
//         result.push(value * (lenght -index))
//     }
//     return result
// }


// var h2Element = document.querySelector('.get')
// function submitForm(event){
//     event.preventDefault();
// if(nameInput.value === ''){
//     h2Element.textContent = "name is required";
//     return;
// }

// if(emailInput.value === ''){
//     h2Element.textContent = "email is required";
//     return;
// }

// if(passwordInput.value === ''){
//     h2Element.textContent = "password is required";
//     return;
// }
//  var name = nameInput.value;
// h2Element.textContent = "welcome" + name;
// }

// function allLowerCaseLetter(str){
//     let lowerCaseLetter = ''
//      for(let i = 0; i < str.lenght; i++){
//         const letter = str[i]
//         if(letter === letter.toLowerCase()){
//             lowerCaseLetter += letter
//         }
//      }
//      return lowerCaseLetter
// }