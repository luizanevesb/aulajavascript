<template>
  <b-card title="Novo serviço" class="col-md-12">
    <b-form>
        <b-form-group label="Data e Hora">
          <b-form-datepicker v-model="form.datahora"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Nome do Pet">
          <b-form-input v-model="form.nomepet" :state="validateState('form.nomepet')"></b-form-input>
        </b-form-group>
        <b-form-group label="Nome do Dono">
          <b-form-input v-model="form.nomedono"></b-form-input>
        </b-form-group>
        <b-form-group label="Serviço">
          <b-form-select :options="servicos" value-field="id" text-field="nome" v-model="form.servico"></b-form-select>
        </b-form-group>
        <b-form-group label="Telefone">
          <b-form-input v-model="form.telefone"></b-form-input>
        </b-form-group>

        <b-button variant="success" @click="cadastrar">Enviar</b-button>
        <b-button variant="danger" @click="$parent.exibeListagem = true">Cancelar</b-button>
        
    </b-form>
  </b-card>
</template>

<script>

import axios from "axios";
import { required, minLength } from 'vuelidate/lib/validators';

export default {

    name: "Agendamento",

    data(){
        return {

            servicos:[],
            form: {
              datahora: "",
              nomepet: "",
              nomedono: "",
              servico: 0,
              telefone: ""
            }

        }
    },
    //validação com vuelidate
    validations: {
      form:{
        nomepet:{
          required,
          minLength: minLength(3)
        }
      }
    },
    methods: {
      cadastrar()
      {
        axios.post("http://localhost:3000/cadastro", this.form)
        .then(function(retorno){
          if (retorno.data == "ok")
          {
            console.log("Cadastrado com sucesso");
          }
        })
      },
      
      validateState(name) {
        const {$dirty, $error } = this.$v.form}
      },

    //evento disparado após renderizar html

    mounted()
    {
      let classe = this;

      axios.get("http://localhost:3000/servicos")
        .then(function(retorno){
            classe.servicos = retorno.data;
        });
    }

}
</script>

<style>

</style>