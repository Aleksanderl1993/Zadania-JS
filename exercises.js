console.log(`1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

4. Write a function translate() that will translate a text into "rövarsprĺket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

7. Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"ĺr"} and use it to translate your Christmas cards from English into Swedish.

8. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

9. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").`);


console.log(`%c Zadanie 1:`, `color: green`);

let num1 = 13;
let num2 = 21;

function whichIsLarger() {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else if (num1 === num2) {
        return `Number ${num1} is equal ${num2}`;
    } else {
        return `Something is wrong :(`;
    }
}

console.log(`%c Spośród liczb ${num1} i ${num2} większa jest ${whichIsLarger()}`, `color: red`);

// ****************

console.log(`%c Zadanie 2:`, `color: green`);

let num01 = 345;
let num02 = 853;
let num03 = 645;
let x = '';
let arrayOfThree = [num01, num02, num03];

function maxOfThree() {
    for (i = 0; i < arrayOfThree.length; i++) {
        if(x < arrayOfThree[i]) {
            x = arrayOfThree[i]
        }
    }
    return x
}

console.log(`%c Największa liczba spośród liczb: ${arrayOfThree}, to: ${maxOfThree()}`, `color: red`);

//  **************

console.log(`%c Zadanie 3:`, `color: green`);

let character = 'h';

function isItAVowel(character) {
    let vowel = new RegExp(/[aeiouy]/);
    let ifNumber = new RegExp(/[0-9]/);

    if (character.length === 1 && character.match(vowel)) {
        return true;
    } else if (character.length !== 1 || character.match(ifNumber)) {
        return `to nie jest litera.`;
    } else {
        return false;
    }
}


console.log(`Litera '${character}' jest samogłoską: ${isItAVowel(character)}`);

//  ****************

console.log(`%c Zadanie 4:`, `color: green`);

//  ****************

console.log(`%c Zadanie 5:`, `color: green`);

let arrayOfNumbers = [1,2,3,4];

let adding = arrayOfNumbers.reduce(sum, 0);

let multiply = arrayOfNumbers.reduce(mult, 1);

let addingES6 = arrayOfNumbers.reduce((a, b) => a + b, 0);

let multiplyES6 = arrayOfNumbers.reduce((a, b) => a * b, 1);

function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

console.log(`%c Wynikiem dodawania składników tabeli [${arrayOfNumbers}] jest ${adding}.`, `color: orange`);

console.log(`%c Wynikiem dodawania składników tabeli [${arrayOfNumbers}] jest ${addingES6}.`, `color: orange`);

console.log(`%c Wynikiem mnożenia składników tabeli [${arrayOfNumbers}] jest ${multiply}.`, `color: orange`);

console.log(`%c Wynikiem mnożenia składników tabeli [${arrayOfNumbers}] jest ${multiplyES6}.`, `color: orange`);

//  ****************

console.log(`%c Zadanie 6:`, `color: green`);

let reverseWord = ('jag testar');

function reverse() {
    return reverseWord.split('').reverse().join('');
}

console.log(`%c Fraza '${reverseWord}' została zamieniona na '${reverse()}'`, `color: orange`);

//  ****************

console.log(`%c Zadanie 7:`, `color: green`);



console.log(`%c Zadanie 8:`, `color: green`);

let arrayOfWords = ['Siema', 'Aleksander', 'Studnia', 'Koń', 'Helikopter', 'Barcelona'];

/*function findLongestWord() {

}*/

let longestWord = arrayOfWords.reduce(function (a, b) { return a.length > b.length ? a : b; });

console.log(`%c Spośród wyrazów ${arrayOfWords} najdłuższym wyrazem jest: ${longestWord}`, `color: orange`);


//  ********************

console.log(`%c Zadanie 9:`, `color: green`);

let n = 5;

function filterLongWords(value) {
    return value.length > n;
}

let filtered = arrayOfWords.filter(filterLongWords);

console.log(filtered);

console.log(`%c Wyrazy spośród tabeli: ${arrayOfWords}, które mają długość większą od ${n}, to:`, `color: orange`);
console.log(`%c${filtered}`, `color: blue`);

//  *****************



console.log(`%c Zadanie 10:`, `color: green`);


