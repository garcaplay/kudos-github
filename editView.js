"use strict";

function pickAColor(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').style.color = e.value;
}

function editKudoText(e) {
    const canvas = document.getElementById('edit-canvas');
    canvas.querySelector('p').innerHTML = `<p>${e.value}</p>`;
}