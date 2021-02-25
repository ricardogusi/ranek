import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import Usuario from "../views/usuario/Usuario.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos"
import UsuarioVendas from "../views/usuario/UsuarioVendas"
import UsuarioCompras from "../views/usuario/UsuarioCompras"
import UsuarioEditar from "../views/usuario/UsuarioEditar"




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produto/:id",
    name: "Produto",
    component: Produto,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/usuario",    
    component: Usuario,
    children: [
      {
        path: "",
        name: "Usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "Compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "Vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "UsuarioEditar",
        component: UsuarioEditar
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});

export default router;
