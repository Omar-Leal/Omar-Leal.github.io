import About from './About.js'
import Project from './Projects.js'

const routes = [

    {
        path: '/',
        template: About()
    },

    {
        path: 'Projects',
        template: Project()
    }

];

export default routes;

