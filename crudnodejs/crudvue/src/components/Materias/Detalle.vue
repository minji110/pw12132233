<template>
    <div class="Detalle"> Materia numero: 
        {{ id }}
        <br>
        Nombre: {{ materias.NOMBRE }}
        <br>
        Creditos: {{ materias.CREDITOS }}
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes';
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
               this.materias = m
            },
        },
    }
</script>