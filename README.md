# kudos-github
Project from Fictizia's "Advance JS" course.

## Description
Tool to generate kudos addressed to GitHub users.

## How to run locally
1. Fork and clone the forked version of this repo.
2. Run npm install in your terminal (inside this project folder).
3. Open your local index.html file in your browser or directly run a live version with VSCode Live Server extension (or what applies to your IDE).

## How to test this repo without downloading anything
I get it, someone just don´t want to download every repo of Github in order to take a quick peak of it. If that´s your case, just follow [this link](https://garcaplay.github.io/kudos-github/) or click on the github pages url at the right top corner! 

## To do list:

**Edit view**
- [ ] Add a "by default" sentence in the text input, so the canvas has a text already on the first render.
- [ ] Add a design to the canvas and detect text size to add line breaks.

**Download kudos**
- [ ] Fix download kudos image functionality.

**Save and retrieve changes**
- [ ] Add functionality to convert that kudo configuration data stored in Local Storage in a token and store that instead in the Local Storage -so the data is not saved as plain text-.
- [ ] Add logic to remove data from Local Storage when user downloads the image or clicks on the "go back" button. 
- [ ] Add functionality on the search view in order to on first load, detect if there´s any information in the Local Storage from a previous session or not. 
    - [ ] If there is information in the Local Storage, show a modal to let the user know that they can retrieve the unfinished kudo. Modal buttons: cancel/close modal and continue to edit view.
    - [ ] Detokenized the information stored in Local Storage and render the edit view with the correct configuration and canvas elements.

### Extra functionality
**Login with FireBase and GitHub**
- [ ] Create the FireBase application
- [ ] Add a new Login view (before the search view) with a button to link with the Github account login popup.
- [ ] Add functionality to login to GitHub through FireBase.
- [ ] If the user logins in correctly, store the information linked to their Github and redirect to the search view.

**List of recommended users**
- [ ] Github API calls to retrieve the necessary information of follower, following, team member, organisation members and other users related to the account logged in.
- [ ] Generate with this data a list of cards of recommmended users in the search view (located below the search bar and search results list), apply to these cards the same functionality as in the usual result-card.