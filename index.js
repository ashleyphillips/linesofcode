document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM loaded');


let friends = ['Kenna', 'Cody', 'Lydia', 'Jean', 'Laura'];

document.getElementById('button').addEventListener('click', function () {
    for (let f = 0; f < friends.length; f++) {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.className = 'friends';
        let newH3 = document.createElement('h3');
        newDiv.appendChild(newH3);
        let text = document.createTextNode(friends[f]);
        newH3.appendChild(text);
        for (let i = 99; i > 0; i--){
            if (i === 2) {
                let verse = document.createElement('p');
                newDiv.appendChild(verse);
                let verseText = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`);
                verse.appendChild(verseText);
            } else if (i === 1) {
                let verse = document.createElement('p');
                newDiv.appendChild(verse);
                let verseText = document.createTextNode(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);
                verse.appendChild(verseText);
            } else {
                let verse = document.createElement('p');
                newDiv.appendChild(verse);
                let verseText = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`);
                verse.appendChild(verseText);
            }
        }
    }
})
});