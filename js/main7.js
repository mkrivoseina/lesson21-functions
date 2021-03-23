// Write a function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}
console.log(countVowel('The quick brown fox'));
