import ROUTER from './js/router.js';

"use strict";

//LISTENERS

window.addEventListener('load', () => {
    document.getElementById('edit-text-input').addEventListener("onkeyup", (e) => editKudoText(e))

    //add the github user's data
    // <img class="edit-avatar" src="${githubUserSearch.avatar}" alt="${githubUserSearch.name}'s avatar">
});


// FUNCTIONALITIES

export function pickAColor(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').style.color = e.value;
}

export function editKudoText(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').innerHTML = `<p>${e.value}</p>`;
}

export function loadSearchView() {
    const parentElement = document.getElementById('editor');
    parentElement.classList.add('hidden');
    parentElement.innerHTML = "";
    const oldParentElement = document.getElementById('search');
    oldParentElement.classList.remove('hidden');
}