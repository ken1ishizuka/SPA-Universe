export class Router {
    routes = {};

    add(routName, pageLink) {
        this.routes[routName] = pageLink;
    }

    route(event) {
        alert(2)
        event = event || window.event;
        event.preventDefault();
    
        window.history.pushState({}, "", event.target.href);
        
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#main").innerHTML = html
            });
    }
}