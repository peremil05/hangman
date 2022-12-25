
var word = "default";
var listOfWords = "./words.txt";

var textHolder = document.getElementById("text");

var completedArray;
var leftArray; 

let getRandomWord = (wordList) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', wordList, false);

    xhr.onload = () => {
        let array = xhr.response.split("\r\n");
        word = array[Math.floor(Math.random()*array.length)];
    };

    xhr.send();

    return word;
}

let prepareArrays = (word) => {
    completedArray = new Array(word.length).fill('_');
    leftArray = word.toLowerCase().split('');
}

word = getRandomWord(listOfWords);

prepareArrays(word);

textHolder.innerHTML = completedArray.join(' ');

document.addEventListener("keypress", function(event) {
    while (leftArray.indexOf(event.key) != -1) {
        if (event.key == " ") {
            completedArray[leftArray.indexOf(event.key)] = "&nbsp";
        }
        else {
            completedArray[leftArray.indexOf(event.key)] = event.key;
        }

        console.log(event.key);

        textHolder.innerHTML = completedArray.join(' ');
        console.log(completedArray.join(' '));

        leftArray[leftArray.indexOf(event.key)] = '';
    }
});