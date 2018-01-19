document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM loaded');

//comments are for my refermece at a later time
let friends = ['Kenna', 'Cody', 'Lydia', 'Jean', 'Laura'];

document.getElementById('button').addEventListener('click', function () {
    for (let f = 0; f < friends.length; f++) {
        let newDiv = document.createElement('div');//create div in html
        document.body.appendChild(newDiv);//sends div to body of html
        newDiv.className = 'friends';//assigning a class to the new div
        let newH3 = document.createElement('h3');//creates h3 elements as variable 'newH3'
        newDiv.appendChild(newH3);//puts h3 elements in newDiv
        let text = document.createTextNode(friends[f]);//createTextNode lets doc know there will be text inside tag
        newH3.appendChild(text);//puts the above text in h3 headings
        for (let i = 99; i > 0; i--){
            if (i === 2) {
                let verse = document.createElement('p');//creates 'p' tag and names it verse. you need it to be named something (verse) so you can refer to it later
                newDiv.appendChild(verse);//puts verse in newDiv
                let verseText = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`);//createTextNode puts text in something. here, it puts the lyrics in 'verseText'
                verse.appendChild(verseText);//assigns verseText to verse
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