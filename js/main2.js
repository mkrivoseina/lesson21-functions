//check if the string is polindrome or not
function isPolindrome(text) {
    const arrayValues = text.split('');
    const reversedArray = arrayValues.reverse();
    const reversedString = reversedArray.join('')

    if (text == reversedString) {
        console.log('A string', text,' is a polindrome')
    }
    else {
        console.log('A string', text,' is not a polindrome')
    }
}

isPolindrome('nature');
isPolindrome('ala');
isPolindrome('konosonok');

