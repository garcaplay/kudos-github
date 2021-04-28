"use strict";

function pickAColor(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').style.color = e.value;
}

function editKudoText(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').innerHTML = `<p>${e.value}</p>`;
}

function loadEditView() {
    const parentElement = document.getElementById('editor');
    parentElement.classList.remove('hidden');
    const oldParentElement = document.getElementById('search');
    oldParentElement.classList.add('hidden');
    const suggestionsElement = document.getElementById('suggestions');
    if (!suggestionsElement.classList.contains('hidden')) {
        suggestionsElement.classList.add('hidden');
    }
    const childElement = createFirstView();
    parentElement.appendChild(childElement);
}

function createFirstView() {
    const nodeElement = document.createElement('div');
    nodeElement.setAttribute('id', 'edit-view');
    nodeElement.innerHTML = `
    <form id="edit-form">
        <div class="form-separator">
            <label id="edit-text-label" class="edit-label">¡Personaliza el texto de tu kudo!</label>
            <input type="text" id="edit-text-input" class="edit-input" name="edit-text-input" maxlength="140" onkeyup="window.editKudoText(this)">
        </div>
        <div class="form-separator">
            <label id="edit-color-label" class="edit-label">¡Elige un color!</label>
            <input type="color" value="#FF6B6B" onchange="window.pickAColor(this)">
        </div>
    </form>
    <div id="edit-canvas">
        <p></p>
        <img class="edit-avatar" src="${githubUserSearch.avatar}" alt="${githubUserSearch.name}'s avatar">
    </div>
`
    return nodeElement;
}