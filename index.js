
var word = "default";
var listOfWords = "./words.txt";

var textHolder = document.getElementById("text");

var completedArray;
var leftArray; 

let inactivateVirtualKey = keyID => {
    let key = document.getElementById(keyID);
    key.style.backgroundColor = "Black";
}

let handleVirtualKeyboardInput = element => {
    while (leftArray.indexOf(element.id) != -1) {
        completedArray[leftArray.indexOf(element.id)] = element.id;

        textHolder.innerHTML = completedArray.join(' ');

        leftArray[leftArray.indexOf(element.id)] = '';
    }
    inactivateVirtualKey(element.id);
}

let getRandomWord = wordList => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', wordList, false);

    xhr.onload = () => {
        let array = xhr.response.split("\r\n");
        word = array[Math.floor(Math.random()*array.length)];
    };

    xhr.send();

    return word;
}

let prepareArrays = word => {
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

        textHolder.innerHTML = completedArray.join(' ');

        leftArray[leftArray.indexOf(event.key)] = '';
    }
    if (document.getElementById(event.key) != null) {
        inactivateVirtualKey(event.key);
    }
});