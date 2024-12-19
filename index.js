// question 1 


/*function countCharacters(S) {
    
    let B = [0, 0];

    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') {
            B[0] += 1; 
        } else if (S[i] === 'D') {
            B[1] += 1; 
        }
    }

    
    return B;
}

const input = "AbaDd";
const result = countCharacters(input);
console.log(result); */

//question2

/*function countHeads(S) {
    let charCount = {};

    for (let char of S) {
        charCount[char] = (charCount[char] || 0) +1;
    let result = '';
    Object.keys(charCount)
        .sort() 
        .forEach((char) => {
            if (charCount[char] > 1) {
                result += char + charCount[char];
            }
        });

    return result;
    }
    let s= "prepbytes";
console.log(countHeads(S));*/

//question5


/*function findLength(S) {
    let count = 0;
    for (let char of S) {
        count++;
    }

    return count;
}
let S = "CeDqe";
console.log(findLength(S));*/


//question9

/*function Reverse_String(S) {
    let reversed = '';

    for (let i = S.length - 1; i >= 0; i--) {
        reversed += S[i];
    }

    return reversed;
}
let S = "I am utkarsh raj";
console.log(Reverse_String(S));*/

//question12

/*function Split_the_String(S) {
    
    let splitStrings = [];
    let currentWord = '';
    for (let char of S) {
        if (char === ' ') {
        
            if (currentWord !== '') {
                splitStrings.push(currentWord);
                currentWord = '';
            }
        } else {
    
            currentWord += char;
        }
    }

    if (currentWord !== '') {
        splitStrings.push(currentWord);
    }

    return splitStrings;
}
let S = "I am utkarsh raj";
console.log(Split_the_String(S));*/

 
//question8


/*function Plain_Check(S) {
    S = S.toLowerCase();
    let left = 0;
    let right = S.length - 1;
    while (left < right) {
        if (S[left] !== S[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true; 
}
let S = "Naman";
console.log(Plain_Check(S));*/


//question6
/*function Game_Winner(S) {

    let adityaWins = 0;
    let danishWins = 0;
    for (let char of S) {
        if (char === 'A') {
            adityaWins++;
        } else if (char === 'D') {
            danishWins++;
        }
    }
    if (adityaWins > danishWins) {
        return "Aditya";
    } else if (danishWins > adityaWins) {
        return "Danish";
    } else {
        return "Draw";
    }
}
let S = "ADDAAADD";
console.log(Game_Winner(S));*/











