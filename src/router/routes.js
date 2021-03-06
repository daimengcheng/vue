/**
 * 所有路由配置的数组
 */
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'


export default [{
        path: '/msite',
        component: Msite,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/order',
        component: Order,
    },
    {
        path: '/',
        redirect: '/msite'
    }
]