
class Router {

    constructor(routes) {
        this.routes = routes;
        this.loadInitialRoute()
    }

    loadRoute(...URL) {
        const matchedRoute = this.matchUrlToRoute(URL)

        const url = `/${URL.join('/')}`;
        history.pushState({}, 'Everything is ok', url);

        const container = document.querySelector('#container_route');
        container.innerHTML = matchedRoute.template;
    } 


    matchUrlToRoute = (URL) => {
        const matchedRoute = this.routes.find(route => {
            
            const routePathSegs = route.path.split('/').slice(1);

            if (routePathSegs.length !== URL.length) {
                return false;
            }

            return routePathSegs
                .every((routePathSeg, i) =>  routePathSeg === URL[i])
        });

        return matchedRoute;

    }



    loadInitialRoute() {

        const SplitPathUrl = window.location.pathname.split('/');
        const pathSegs = SplitPathUrl.length > 1 ?  SplitPathUrl.slice(1): '';

        this.loadRoute(...pathSegs); 

    }
        




}

export default Router;