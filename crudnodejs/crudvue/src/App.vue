<template>
  <div id="app">
    <nav>
      <img src="@/assets/tec.png" alt="">
      <router-link to="/">Inicio</router-link> | 
      <router-link to="/alumnos">Alumnos</router-link> | 
      <router-link to="/maestros">Maestros</router-link> | 
      <router-link to="/materias">Materias</router-link> | 
      <router-link to="/grupos">Grupos</router-link> |
      <router-link to="/cargarGrupo">Toma de Carga</router-link>
    </nav>
    <router-view/>
    <footer>
      <span class="letra-grande-titulo nito">Sistema de carga escolar Saoko</span>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
