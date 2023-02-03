let currentRoute;

async function route(router) {
    if (currentRoute === router) return;

    const body = document.getElementsByTagName('inner-body')[0]

    const script = document.createElement("script")
    script.src = `./router/${router}.js`;

    body.innerHTML = "";
    body.appendChild(script);

    const pageData = document.querySelectorAll("[data-route]");
    for (let index = 0; index < pageData.length; index++) {
        const element = pageData[index];
        const listener = () => {
            route(element.dataset.route);
            element.removeEventListener('click', listener);
        };
        element.addEventListener('click', listener);
    }

    const switchData = document.querySelectorAll("[data-switch]");
    for (let index = 0; index < switchData.length; index++) {
        const element = switchData[index];
        const routeData = element.dataset.switch.split(",").filter((e) => e !== router);
        const listener = (event) => {
            route(routeData[0]);
            element.removeEventListener('click', listener);
        };
        element.addEventListener('click', listener);
    }

    currentRoute = router;
}

route("index");