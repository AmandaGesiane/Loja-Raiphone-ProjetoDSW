<template>
  <div id="form">
    <br>
    <h1>Cadastro de Funcionario</h1>
    <div id="form">
      <b-form inline @submit="cadastraproduto">

        <label class="sr-only" for="input-nome">Nome do Funcionario</label>
        <b-form-input
          id="input-nome"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o Nome do Funcionario"
          v-model="NovoProduto.nome"
        ></b-form-input>

        <label class="sr-only" for="input-funcao">Função</label>
        <b-form-input
          id="input-funcao"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui a funcao"
          v-model="NovoFuncionario.funcao"
        ></b-form-input>

        <label class="sr-only" for="input-ID">ID</label>
        <b-form-input
          id="input-ID"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o ID"
          v-model="NovoFuncionario.ID"
        ></b-form-input>

        <br>
        <b-button type="submit" variant="primary">Cadastrar Funcionario</b-button>
      </b-form>
    </div>

  </div>
</template>

<script>

export default {
 name: "CadastraFuncionario",
 data() {
    return {
      NovoFuncionario: {
        nome: '',
        Salario:  '',
        ID:   ''
      }
    }
  },
 methods: {
   cadastraproduto() {
   let payload = this.$http.post('/cadastrafuncionario', this.NovoFuncionario)
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