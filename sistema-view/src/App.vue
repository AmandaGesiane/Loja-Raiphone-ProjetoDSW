<template>
  <div id="app">
    <br>
    <MenuLateral></MenuLateral>
    <router-view/>
  </div>
</template>

<script> 
import MenuLateral from "@/components/MenuLateral.vue"; 
 
 export default { 
    components: { MenuLateral },  
 }; 


</script>
<style>
#app {
  font-family: 'Permanent Marker';font-size: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: purple;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #3f1b36;
}

nav a.router-link-exact-active {
  color: #5d2880;
}
</style>
