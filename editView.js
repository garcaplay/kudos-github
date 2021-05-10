import ROUTER from './js/router.js';

"use strict";

// FUNCTIONALITIES

export function pickAColor(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').style.color = e.value;
}

export function editKudoText(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').innerHTML = `<p>${e.value}</p>`;
}

export function loadEditView() {
    // const parentElement = document.getElementById('editor');
    // parentElement.classList.remove('hidden');
    // const oldParentElement = document.getElementById('search');
    // oldParentElement.classList.add('hidden');
    // const suggestionsElement = document.getElementById('suggestions');
    // if (!suggestionsElement.classList.contains('hidden')) {
    //     suggestionsElement.classList.add('hidden');
    // }
    // const childElement = createFirstView();
    // parentElement.appendChild(childElement);
    createFirstView();
}

export function loadSearchView() {
    const parentElement = document.getElementById('editor');
    parentElement.classList.add('hidden');
    parentElement.innerHTML = "";
    const oldParentElement = document.getElementById('search');
    oldParentElement.classList.remove('hidden');
}

export function createFirstView() {
    ROUTER.load('edit');
    //     const nodeElement = document.createElement('div');
    //     nodeElement.setAttribute('id', 'edit-view');
    //     nodeElement.innerHTML = `
    //     <div id="edit-header">
    //         <button onclick="window.loadSearchView()" title="Go to previous page" class="btn-icon"><span><img src="./utils/icons/back.svg" alt="Go to previous page"></span></button>
    //     </div>
    //     <form id="edit-form">
    //         <div class="form-separator">
    //             <label id="edit-text-label" class="edit-label">¡Personaliza el texto de tu kudo!</label>
    //             <input type="text" id="edit-text-input" class="edit-input" name="edit-text-input" maxlength="140" onkeyup="window.editKudoText(this)">
    //         </div>
    //         <div class="form-separator">
    //             <label id="edit-color-label" class="edit-label">¡Elige un color!</label>
    //             <input type="color" value="#1A535C" onchange="window.pickAColor(this)">
    //         </div>
    //     </form>
    //     <div id="edit-canvas">
    //         <p></p>
    //         <img class="edit-avatar" src="${githubUserSearch.avatar}" alt="${githubUserSearch.name}'s avatar">
    //     </div>
    // `
    // return nodeElement;
}