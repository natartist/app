import { isAuth } from "@/utils/user-auth";
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: {name: "my-login"}
  },
  {
    path: '/login',
    name: 'my-login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/RegisterView.vue')
  },
  {
    path: '/orden',
    name: 'orden-app',
    component: () => import(/* webpackChunkName: "Orden" */ '../orden/HomeOrden.vue'),
    meta: { requiresAuth: true},
    children: [
      {  //* localhost:3000/products/
        path: '',
        name: 'orden-list',
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "ListaProductos" */ '../orden/views/OrdenCompraListView.vue')
      },
      {
        //localhost:3000/products/2
        path: ':id',
        name: 'orden-id',
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "ProductoId" */ '../orden/views/OrdenByIdView.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//rutas protegidas
router.beforeEach((to, from, next) => {
  //* Vamos recorrer cada una de las rutas
  if(to.matched.some(record => record.meta.requiresAuth)) {
    let usuarioValido;
    console.log('Ruta Protegida');
    // const usuario = isAuth(); // puede ser verdadero o falso
    // console.log(usuario);
    //* Obtener la información del local storage
    let auth = localStorage.getItem('isAuth');
    auth== "false" || auth == null? usuarioValido = false: usuarioValido = true;
    if(!usuarioValido) {
      next({path: '/login'})
    } else {
      next(); // * lo dejamos pasar hacia los productos
    }
  } else {
    next(); //* para aquellas rutas que no tengan el requiresAuth las dejamos pasar es decir next();
  }
});

export default router
