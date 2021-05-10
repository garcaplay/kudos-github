const editView = `
    <div id="edit-header">
        <button onclick="window.loadSearchView()" title="Go to previous page" class="btn-icon"><span><img src="./utils/icons/back.svg" alt="Go to previous page"></span></button>
    </div>
    <form id="edit-form">
        <div class="form-separator">
            <label id="edit-text-label" class="edit-label">¡Personaliza el texto de tu kudo!</label>
            <input type="text" id="edit-text-input" class="edit-input" name="edit-text-input" maxlength="140" onkeyup="window.editKudoText(this)">
        </div>
        <div class="form-separator">
            <label id="edit-color-label" class="edit-label">¡Elige un color!</label>
            <input type="color" value="#1A535C" onchange="window.pickAColor(this)">
        </div>
    </form>
    <div id="edit-canvas">
        <p></p>
        <img class="edit-avatar" src="${githubUserSearch.avatar}" alt="${githubUserSearch.name}'s avatar">
    </div>
`;

export default editView;