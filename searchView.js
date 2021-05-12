import ROUTER from './js/index.js';
"use strict";

let { githubUserSearch } = window;

//Listeners

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', searchUser);

//Functionalities

export async function searchUser() {

    const inputText = document.getElementById('search-input').value;
    // we check if the user entered passes the GitHub username validator
    const inputTextMatch = inputText.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
    if (inputTextMatch) {
        githubUserSearch = await fetch(`https://api.github.com/users/${inputText}`).then((res) => res.json()).then((response) => {
            if (response.message === "Not Found") {
                return {
                    error: true,
                    message: "No user was found with that name"
                }
            } else {
                return {
                    id: response.id,
                    avatar: response.avatar_url,
                    name: response.name ? response.name : response.login,
                    email: response.email,
                    github_link: response.url,
                    twitter_link: response.twitter_username ? `https://www.twitter.com/${response.twitter_username}` : null
                }
            }

        });
        window.githubUserSearch = githubUserSearch;
        showUserSearchResult();
    } else {
        const toastElement = document.getElementById('toast');
        const toastInfoElement = toastElement.querySelector('#toast-info');

        toastElement.classList.add('error');
        toastInfoElement.innerHTML = `<p>The username entered does not comply with GitHub's composition rules:</p>
        <ul>
            <li>Github username may only contain alphanumeric characters or hyphens.</li>
            <li>Github username cannot have multiple consecutive hyphens.</li>
            <li>Github username cannot begin or end with a hyphen.</li>
        </ul>`
        toastElement.classList.remove('hidden');
    }
}

function showUserSearchResult() {
    const resultElement = document.getElementById('search-result');
    if (githubUserSearch.error) {
        resultElement.innerHTML = `<p>${githubUserSearch.message}</p>`
    } else {
        resultElement.innerHTML = `<div id="user-${githubUserSearch.id}-card" class="user-card">
                <img class="user-card-avatar" src="${githubUserSearch.avatar}" alt="${githubUserSearch.name}'s avatar">
                <p class="user-card-name">${githubUserSearch.name}</p>
                <button type="button" id="user-kudo-btn">Crear Kudo!</button>
            </div>`;

        document.getElementById('user-kudo-btn').addEventListener('click', loadEditView);
    }
}

function loadEditView() {
    ROUTER.load('edit');
}