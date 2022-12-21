var word = "osteoporosis";

var textHolder = document.getElementById("text");

var completedArray = new Array(word.length).fill('_');
var leftArray = word.toLowerCase().split('');

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