import ROUTER from './js/index.js';
import { searchInit } from "../searchView.js";

"use strict";

export const editInit = () => {
    let githubUserSearch = window.githubUserSearch;

    //LISTENERS
    document.getElementById('edit-text-input').addEventListener("keyup", editText);
    document.getElementById('edit-back-btn').addEventListener("click", (e) => loadSearchView(e));
    document.getElementById('edit-color-picker').addEventListener("change", editText);

    //add the github user's data
    addUserAvatar();

    // FUNCTIONALITIES

    function editText() {
        clearTextFromCanvas();
        const textValue = document.getElementById('edit-text-input').value;
        const colorValue = document.getElementById('edit-color-picker').value;
        createCanvasText({ font: "16px sans-serif", color: colorValue }, textValue);
    }

    function createCanvasText(fontConfig, text) {
        const canvasCtxt = document.getElementById('edit-canvas').getContext('2d');
        canvasCtxt.font = fontConfig.font;
        canvasCtxt.fillStyle = fontConfig.color;
        canvasCtxt.fillText(text, 0, 130);
    }

    function clearTextFromCanvas() {
        const canvas = document.getElementById('edit-canvas');
        const canvasCtxt = canvas.getContext('2d');
        canvasCtxt.beginPath();
        canvasCtxt.rect(0, 104, canvas.scrollWidth, canvas.scrollHeight);
        canvasCtxt.fillStyle = "#fff";
        canvasCtxt.fill();
    }

    function addUserAvatar() {
        const img = new Image();
        img.src = githubUserSearch.avatar;
        img.alt = `${githubUserSearch.name}'s avatar`;

        const canvasCtxt = document.getElementById('edit-canvas').getContext('2d');
        canvasCtxt.drawImage(img, 0, 0, img.width, img.height, 0, 0, 100, 100);
    }

    function loadSearchView() {
        ROUTER.load('search', searchInit);
    }

}

export default editInit;