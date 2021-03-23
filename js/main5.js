// <!-- Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox ' -->

function titleCase(text) {
    let splitText = text.toLowerCase().split(' ');
    for (let i = 0; i < splitText.length; i++) {
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);     
    }
    return splitText.join(' '); 
 }
 
 console.log(titleCase("the quick brown fox"));
 

 