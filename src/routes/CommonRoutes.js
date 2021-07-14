import Portal from "../containers/Portal"
import MainLayout from '../layout/MainLayout'

let routes = [
    {
        path: '/cryptools-sd',
        component: Portal,
        layout: MainLayout,
        exact: true
    },
]

export default routes;
