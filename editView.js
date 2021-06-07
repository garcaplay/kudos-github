import ROUTER from './js/index.js';
import { searchInit } from "../searchView.js";

"use strict";

export const editInit = () => {
    let githubUserSearch = window.githubUserSearch;
    const canvas = document.getElementById("edit-canvas");
    const canvasCtxt = canvas.getContext("2d");

    //LISTENERS
    document.getElementById('edit-text-input').addEventListener("keyup", editText);
    document.getElementById('edit-back-btn').addEventListener("click", (e) => loadSearchView(e));
    document.getElementById('edit-color-picker').addEventListener("change", editText);
    document.getElementById('edit-download-btn').addEventListener("click", (e) => downloadImage(e));

    //add background to canvas element
    canvasCtxt.fillStyle = "white";
    canvasCtxt.fillRect(0, 0, canvas.width, canvas.height);

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
        canvasCtxt.font = fontConfig.font;
        canvasCtxt.fillStyle = fontConfig.color;
        canvasCtxt.fillText(text, 20, 140);
    }

    function clearTextFromCanvas() {
        canvasCtxt.beginPath();
        canvasCtxt.rect(20, 114, canvas.scrollWidth, canvas.scrollHeight);
        canvasCtxt.fillStyle = "#fff";
        canvasCtxt.fill();
    }

    function addUserAvatar() {
        const img = new Image();
        img.src = githubUserSearch.avatar;
        img.alt = `${githubUserSearch.name}'s avatar`;

        canvasCtxt.drawImage(img, 20, 10, img.width, img.height, 20, 10, 100, 100);
    }

    function loadSearchView() {
        ROUTER.load('search', searchInit);
    }

    function downloadImage(e) {
        const imageToDownload = canvas.toDataURL("image/jpg");
        e.href = imageToDownload;
    }

}

export default editInit;