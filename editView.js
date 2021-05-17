import ROUTER from './js/index.js';
import { searchInit } from "../searchView.js";

"use strict";

export const editInit = () => {
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
        const img = new Image();
        img.src = githubUserSearch.avatar;
        img.alt = `${githubUserSearch.name}'s avatar`;

        const canvasCtxt = document.getElementById('edit-canvas').getContext('2d');
        canvasCtxt.drawImage(img, 0, 0, 100, 100, 0, 0, 100, 100);
    }

    function loadSearchView() {
        ROUTER.load('search', searchInit);
    }

}

export default editInit;