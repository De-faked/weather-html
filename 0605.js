let zahlen = [0, 1, 2, 3, 4, 5, 100];






// function incrementByOne(arr){
//     for (let i = 0; i < arr.length; i++)
//     {
//         arr[i] = arr[i] + 1;
//     }
//     console.log(arr);
//     return arr;
// };

// incrementByOne(zahlen);

// function addItemToArray(arr, xItem) {
//     arr.push(xItem);
//     console.log(arr);
//     return arr;

// };
// addItemToArray(zahlen, 5);

// function addItemToFront(arr, xItem) {
//     arr.unshift(xItem);
//     console.log(arr);
//     return arr;
// }

// addItemToFront(zahlen, 23);

// function addItemToFront(arr, xItem) {
//     arr.shift();
//     console.log(arr);
//     return arr;
// }

// addItemToFront(zahlen);

// let ganzerSatz = "";
// let satz = ["ich", "bin ", "ein", "grosses", "satze"];
// function wordsToSentence(words) {
//     for (let i = 0; i < words.length; i++) {
//         ganzerSatz += words[i] + " ";
//     }
//     console.log(ganzerSatz);
//     return ganzerSatz;
// }
// wordsToSentence(satz);

// let maxNumber = 0;
// for (let i = 0; i < zahlen.length; i++) {
//     if (zahlen[i] > maxNumber) {
//         maxNumber = zahlen[i];
//     }
// }
// console.log("this is the largest number: " + maxNumber);
// return maxNumber;



let smallestNumber = 0;
for (let i = 0; zahlen.length; i++) {
    if (zahlen[i] < smallestNumber) {
        smallestNumber = zahlen[i];
    }

}
console.log("this is the smalles number: " + smallestNumber);
return smallestNumber;

