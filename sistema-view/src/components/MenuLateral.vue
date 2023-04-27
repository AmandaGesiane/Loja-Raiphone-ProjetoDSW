<template>
  <div>
    <b-button v-b-toggle.menu-lateral>Menu</b-button>
    <b-sidebar id="menu-lateral" title="Menu" shadow>
        <b-nav vertical>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/cadastracelular">Cadastro de Celular</b-nav-item>
            <b-nav-item to="/cadastrafuncionario">Cadastro de Funcionario</b-nav-item>
            <b-nav-item to="/sobre">Sobre o Sistema</b-nav-item>
        </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>