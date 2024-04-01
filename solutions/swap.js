//how to change upperCase to lowwerCase and viceverser
var sentence = 'the quick brown fox';// since const can neither  be redeclared nor reasigned

var capitaliseString = (word)=> word[0].toLowerCase() + 
word.slice(1).toUpperCase(); //the first word should be small while the rest big 

var capitaliseWords =(word) =>word.split(' ').map
(capitaliseString).join(' ');//to return an array as a string 

console.log(capitaliseWords(sentence));
    