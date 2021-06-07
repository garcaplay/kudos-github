import { searchInit } from "../searchView.js";

class Router {
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    async initRouter() {
        let { location: { pathname = "/" } } = window;
        if (pathname.includes("kudos-github/")) {
            pathname = pathname.replace("kudos-github/", "")
        }
        const url = pathname === "/" ? "search" : pathname.replace("/", "");
        this.load(url);
    }

    async load(page = "search", pageInit = searchInit) {
        const container = document.querySelector("#app");
        const request = new XMLHttpRequest();

        request.onload = () => {
            container.innerHTML = request.responseText;
            pageInit();
        };
        request.open("GET", `../../components/${page}View.html`, true);
        request.send();

    }
}

export default Router;