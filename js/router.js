class Router {
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    initRouter() {
        const { location: { pathname = "/" } } = window;
        const URL = pathname === "/" ? "search" : pathname.replace("/", "");
        this.load(URL);
    }

    load(page = "search") {
        const { paths } = this;
        const { path } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#app");

        const request = new XMLHttpRequest();
        request.onload = () => {
            $CONTAINER.innerHTML = request.responseText;
            const newScript = document.createElement('script');
            newScript.setAttribute('src', `./${page}View.js`);
            newScript.setAttribute('type', 'module');
            document.body.appendChild(newScript);
            window.history.pushState({}, "done", path);
        };
        request.open("GET", `./components/${page}View.html`, true);
        request.send();

    }
}

export default Router;