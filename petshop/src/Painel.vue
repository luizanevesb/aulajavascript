<template>
  <div>
    <h2>Novo cadastro para: {{ pet }}</h2> 
    <fieldset>

        <label>Nome do Pet:</label>
        <input type="text" v-model="pet"/> <br>
        <label>Dono:</label>
        <input type="text" v-model="dono"/> <br>
        <button @click="cadastro">Cadastrar</button>

    </fieldset>    

    <table>
        <thead>
            <tr>
                <th>Pet</th>
                <th>Dono</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(i, idx) in lista" :key="idx">
                <td>{{ i.pet }}</td>
                <td>{{ i.dono }}</td>
                <td @click="excluir(idx)" class="deletar">[X]</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    data: function()
    {
        return {
            lista: [
                {"pet": "Bob", "dono": "João"}, 
                {"pet": "Lulu", "dono": "Maria"},
                {"pet": "Amy", "dono": "Luiza"}
            ],
            pet: "",
            dono: ""
        }     
    },
    methods: {
        cadastro: function() {
            var item = {
                "pet": this.pet, "dono": this.dono
            }
            this.lista.push(item);
            this.pet = "";
            this.dono = "";
        },
        excluir: function(idx) {
            
            this.lista.splice(idx, 1);
        }
    }
}
</script>

<style>
    label {
        width: 100px;
        display: inline-block;
        text-align: right;
        font-size: small;
    }
    fieldset {
        width: 50%;
    }
    table {
        margin-top: 15px;
        border: 1px dotted;
        border-collapse:separate;
        width: 50%;
    }
    th, td {
        border: 1px dotted;
        padding: 4px;
    }
    thead {
        background-color:lightpink;
    }
    .deletar {
        color: crimson;
        cursor: pointer;
    }
</style>