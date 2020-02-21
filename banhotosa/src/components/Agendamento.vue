<template>
  <b-card title="Novo serviço" class="col-md-12">
    <b-form>
        <b-form-group label="Data e Hora">
          <b-form-datepicker id="datahora"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Nome do Pet">
          <b-form-input id="pet"></b-form-input>
        </b-form-group>
        <b-form-group label="Nome do Dono">
          <b-form-input id="dono"></b-form-input>
        </b-form-group>
        <b-form-group label="Serviço">
          <b-form-select :options="servicos"></b-form-select>
        </b-form-group>
        <b-form-group label="Telefone">
          <b-form-input id="telefone"></b-form-input>
        </b-form-group>

        <b-button variant="success" @click="cadastrar">Enviar</b-button>
        <b-button variant="success" @click="$parent.exibeListagem = true">Cancelar</b-button>
        <b-button variant="danger" @click="carregar">Cancelar</b-button>
        
    </b-form>
  </b-card>
</template>

<script>

import axios from "axios";

export default {

    name: "Agendamento",

    data(){
        return {
            servicos: ["Banho","Tosa","Consulta"],
            agendamentos: [
            {"datahora":"10-10-2020 10:10", "pet":"Amy", "servico":"banho"},
            {"datahora":"10-10-2020 10:30", "pet":"Rex", "servico":"tosa"}
            ]
        }
    },
    methods: {
      cadastrar()
      {
        console.log("cadastrar");
      },

      carregar()
      {
        console.log("carregando");
        axios.get("http://localhost:3000/servicos");

      }
    }

}
</script>

<style>

</style>