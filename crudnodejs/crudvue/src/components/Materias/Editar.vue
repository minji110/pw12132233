<template>
    <div class="Editar">
        <h2>Datos de la Materia</h2>
        <p></p>
        <label for="txtnombre">Nombre: </label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="materias.NOMBRE" 
            class="form-control" 
        />
        <p></p>
        <label for="txtcreditos">Departamento: </label>
        <input 
            type="text" 
            name="txtcreditos" 
            id="txtcreditos" 
            v-model="materias.CREDITOS" 
            class="form-control" 
        />
        <p></p>
        
        <button @click.prevent="actualizar()">
            Actualizar Materia
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes';
import { re } from 'semver';
    export default{
        name: "Detalle",
        components: {},
        props:{
            id: Number,
        },
        data: function(){
            return{
                materias: [],
            };
        },
        created() {
           this.traeDetalle(); 
        },
        methods: {
            traeDetalle: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/materias/"+this.id).then(function(response){
                 console.log(response.data[0])
                 m = response.data[0];
               }).catch(function (error) {
                console.log(error);
               });
               this.materias = m;
            },

            actualizar: async function () {
                const res = await axios.put(URL_DATOS+"/materias/"+this.id, {
                    nom: this.materias.NOMBRE, 
                    cre: this.materias.CREDITOS,
                });
                console.log(res);
            },
        },
    }
</script>