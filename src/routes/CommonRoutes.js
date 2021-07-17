import Portal from "../containers/Portal"
import About from "../containers/About"
import MainLayout from '../layout/MainLayout'

let routes = [
    {
        path: '/cryptools-sd',
        component: Portal,
        layout: MainLayout,
        exact: true
    },
    {
        path: '/cryptools-sd/about',
        component: About,
        layout: MainLayout,
        exact: true
    },
]

export default routes;
