import Router from "./router.js"
import routes from './routes.js'

const findRoute = new Router(routes);


const projectButton = document.querySelector('#projectButton')
projectButton.onclick = () => findRoute.loadRoute('Project')