<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'Usuario'}">Produtos </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Compras'}">Compras </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Vendas'}">Vendas </router-link>
        </li>
        <li>
          <router-link :to="{name: 'UsuarioEditar'}">Editar Usuário </router-link>
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar </button>
        </li>
      </ul>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    deslogar(){
      this.$store.dispatch("deslogarUsuario")
      this.$router.push("/login")
    }
  }
};
</script>

<style></style>
