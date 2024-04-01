//how to change upperCase to lowwerCase and viceverser
let sentence = 'the quick brown fox';// since const can neither  be redeclared nor reasigned

let capitaliseString = (word)=> word[0].toLowerCase() + 
word.slice(1).toUpperCase(); //the first word should be small while the rest big 

let capitaliseWords =(word) =>word.split(' ').map
(capitaliseString).join(' ');//to return an array as a string 

console.log(capitaliseWords(sentence));
    