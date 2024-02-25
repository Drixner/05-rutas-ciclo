<template>
  <div>
    <router-link to="/">Pokemon List</router-link>
    <router-link to="/id">Pokemon por id </router-link>
    <router-link to="/about">Sobre</router-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 0 20px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
.router-link-exact-active {
  color: #42b983;
}
</style>
