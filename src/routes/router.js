import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChuckName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout"),
        children:[
            { 
                path: 'home',
                name: 'pokemon-home', 
                component: () => import(/* webpackChuckName: "ListPage" */ "@/modules/pokemon/pages/ListPage") 
            },
            { 
                path: 'about',
                name: 'pokemon-about', 
                component: () => import(/* webpackChuckName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage")
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChuckName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage") ,
                props: (route)=>{
                    const id = Number(route.params.id);
                    return isNaN(id) ? {id: 1} : {id}
                }
            },
            {
                path: '',
                redirect: {name: 'pokemon-about'}
            },

        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChuckName: "DBZLayout" */ "@/modules/dbz/layouts/DBZLayout"),
        children:[
            { 
                path: 'characters',
                name: 'dbz-characters', 
                component: () => import(/* webpackChuckName: "DBZCharacters" */ "@/modules/dbz/pages/Characters") 
            },
            { 
                path: 'about',
                name: 'dbz-about', 
                component: () => import(/* webpackChuckName: "DBZAbout" */ "@/modules/dbz/pages/About")
            },
            {
                path: '',
                redirect: {name: 'dbz-characters'}
            },
        ]
    },
    { 
        path: '/:patchMatch(.*)*',
        component: () => import(/* webpackChuckName: "NoPageFound" */ "@/modules/shared/pages/NoPagesFound")
    }
  ]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router