<template>
    <div class="Detalle"> Numero de control: 
        {{ id }}
        <br>
        Nombre: {{ alumnos.NOMBRE }}
        <br>
        Carrera: {{ alumnos.CARRERA }}
        <br>
        Estatus: {{ alumnos.ESTATUS }}
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
                alumnos: [],
            };
        },
        created() {
           this.traeDetalle(); 
        },
        methods: {
            traeDetalle: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/alumnos/"+this.id).then(function(response){
                 console.log(response.data[0])
                 m = response.data[0];
               }).catch(function (error) {
                console.log(error);
               });
               this.alumnos = m
            },
        },
    }
</script>