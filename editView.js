import ROUTER from './js/index.js';

"use strict";

let githubUserSearch = window.githubUserSearch;
//LISTENERS

document.getElementById('edit-text-input').addEventListener("keyup", (e) => editKudoText(e));
document.getElementById('edit-back-btn').addEventListener("click", (e) => loadSearchView(e));
document.getElementById('edit-color-picker').addEventListener("change", (e) => pickAColor(e));

//add the github user's data
addUserAvatar();


// FUNCTIONALITIES

function pickAColor(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').style.color = e.currentTarget.value;
}

function editKudoText(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').innerHTML = `${e.currentTarget.value}`;
}

function addUserAvatar() {
    const img = document.createElement('img');
    img.setAttribute('src', githubUserSearch.avatar);
    img.setAttribute('alt', `${githubUserSearch.name}'s avatar`);
    img.classList.add('edit-avatar');
    document.getElementById('edit-canvas').appendChild(img);
}

function loadSearchView() {
    ROUTER.load('search');
}