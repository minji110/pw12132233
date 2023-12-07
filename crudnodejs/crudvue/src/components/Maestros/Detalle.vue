<template>
    <div class="Detalle"> Maestro numero: 
        {{ id }}
        <br>
        Nombre: {{ maestros.NOMBRE }}
        <br>
        Departamento: {{ maestros.DEPARTAMENTO }}
        <br>
        Estatus: {{ maestros.ESTATUS }}
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
                maestros: [],
            };
        },
        created() {
           this.traeDetalle(); 
        },
        methods: {
            traeDetalle: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/maestros/"+this.id).then(function(response){
                 console.log(response.data[0])
                 m = response.data[0];
               }).catch(function (error) {
                console.log(error);
               });
               this.maestros = m
            },
        },
    }
</script>