import { searchInit } from "../searchView.js";

class Router {
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    async initRouter() {
        const { location: { pathname = "/" } } = window;
        const URL = pathname === "/" ? "search" : pathname.replace("/", "");
        this.load(URL);
    }


    async load(page = "search", pageInit = searchInit) {
        const CONTAINER = document.querySelector("#app");

        const request = new XMLHttpRequest();
        request.onload = () => {
            CONTAINER.innerHTML = request.responseText;
            pageInit();
        };
        request.open("GET", `./components/${page}View.html`, true);
        request.send();

    }
}

export default Router;