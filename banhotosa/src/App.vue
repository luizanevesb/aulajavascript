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

export default {
  name: 'App',

  components:{Agendamento},

  data()
  {
    return{
      exibeListagem: true,
      colunas: [
        {
          key:"datahora", label:"Data/Hora", sortable: true
        },
        {
          key:"pet", label:"Nome do Pet", sortable: true
        },
        {
          key:"servico",
          label:"Serviço"
        }
        
      ],
      agendamentos: [
        {"datahora":"10-10-2020 10:10", "pet":"Amy", "servico":"banho"},
        {"datahora":"10-10-2020 10:30", "pet":"Rex", "servico":"tosa"}
      ]
      

    }
   
  }

}
</script>

<style>
</style>
