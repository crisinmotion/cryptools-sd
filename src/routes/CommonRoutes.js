import Hello from "../containers/Hello"
import EmptyLayout from '../layout/EmptyLayout'

let routes = [
    {
        path: '/hello',
        component: Hello,
        layout: EmptyLayout,
        exact: true
    },
]

export default routes;
