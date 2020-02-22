<template>
  <div id="app">
    <b-navbar type="dark" variant="success">
      <b-navbar-brand >Banho e Tosa</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#" @click="exibeListagem = false">Agendar</b-nav-item>
      </b-navbar-nav>
    </b-navbar>


    <b-container>
      <b-row>
        <div v-if="exibeListagem">
        <b-card title="Agendamentos" class="col-md-12">
            <b-table striped hover :items="agendamentos" :fields="colunas">
              <template v-slot:cell(datahora)="valor">
                {{ formataData(valor.item.datahora) }}
              </template>
            </b-table>
        </b-card>
        </div>
        <div v-else>
          <Agendamento></Agendamento>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Agendamento from "./components/Agendamento"
import axios from "axios";
import moment from "moment";

export default {
  name: 'App',

  components:{Agendamento},

  data()
  {
    return{
      exibeListagem: true,
      colunas: [
        {key:"datahora", label:"Data/Hora", sortable: true},
        {key:"nome_pet", label:"Nome do Pet", sortable: true},
        {key:"servico", label:"Serviço"}
      ],
      agendamentos: []
      
    }
   
  },
  methods:
  {
    formataData(valor){
      return moment(valor).format('DD/MM/YYYY HH:mm');
    }
  },
  mounted()
    {
      let classe = this;

      axios.get("http://localhost:3000/agendamentos")
        .then(function(retorno){
            classe.agendamentos = retorno.data;
        });
    }


}
</script>

<style>
</style>
