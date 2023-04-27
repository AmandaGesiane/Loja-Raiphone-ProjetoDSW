<template>
  <div id="form">
    <br>
    <h1>Cadastro de Celular</h1>
    <div id="form">
      <b-form inline @submit="cadastracelular">

        <label class="sr-only" for="input-nome">Nome do Celular</label>
        <b-form-input
          id="input-nome"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o Nome do Celular"
          v-model="NovoCelular.nome"
        ></b-form-input>

        <label class="sr-only" for="input-caracteristica">Caracteristicas Técnicas</label>
        <b-form-input
          id="input-caracteristica"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui as caracteristicas"
          v-model="NovoProduto.preco"
        ></b-form-input>

        <label class="sr-only" for="input-codcelular">Codigo do Celular</label>
        <b-form-input
          id="input-codcelular"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o Codigo do celular"
          v-model="NovoCelular.codcelular"
        ></b-form-input>

        <br>
        <b-button type="submit" variant="primary">Cadastrar Celular</b-button>
      </b-form>
    </div>

  </div>
</template>

<script>

export default {
 name: "CadastraCelular",
 data() {
    return {
      NovoCelular: {
        nome: '',
        CaracteristicasTecnicas:  '',
        codcelular:   ''
      }
    }
  },
 methods: {
   cadastracelular() {
   let payload = this.$http.post('/cadastrcelular', this.NovoCelular)
  .then(response => {
    console.log(response);
    console.log(payload.data);
  })
  .catch(error => {
    console.log(error);
  });
  },
 },
};
</script>

<style>
#form {
        max-width: 400px;
        margin: auto;
    }
</style>