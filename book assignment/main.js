"use strict";

var button = document.querySelector('button');

button.onclick = function(){
    var data = {
        'title': document.querySelector('#title-input').value,
        'subtitle': document.querySelector('#subtitle-input').value,
        'author': document.querySelector('#author-input').value,
        'publisher': document.querySelector('#publisher-input').value,
        'publisherYear': document.querySelector('#publisher-year-input').value,
        'backgroundColor': document.querySelector('#background-input').value,
    }

    document.querySelector('#title').innerHTML = data.title;
    document.querySelector('#subtitle').innerHTML = data.subtitle;
    document.querySelector('#author').innerHTML = data.author;
    document.querySelector('#publisher').innerHTML = data.publisher;
    document.querySelector('#publishing-year').innerHTML = data.publisherYear;
    document.querySelector('.book').style.backgroundColor = data.backgroundColor;

}