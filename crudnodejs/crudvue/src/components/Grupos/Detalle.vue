<template>
    <div class="Detalle"> Grupo numero: 
        {{ id }}
        <br>
        Clave Materia: {{ grupos.CLAVEMATERIA }}
        <br>
        Clave Maestro: {{ grupos.CLAVEMAESTRO }}
        <br>
        Cupo Limite: {{ grupos.LIMITEALUMNOS }}
        <br>
        Inscritos: {{ grupos.INSCRITOS }}
        <br>
        Lunes: {{ grupos.HORARIOLUNES }}
        <br>
        Martes: {{ grupos.HORARIOMARTES }}
        <br>
        Miercoles: {{ grupos.HORARIOMIERCOLES }}
        <br>
        Jueves: {{ grupos.HORARIOJUEVES }}
        <br>
        Viernes: {{ grupos.HORARIOVIERNES }}
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
                grupos: [],
            };
        },
        created() {
           this.traeDetalle(); 
        },
        methods: {
            traeDetalle: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/grupos/"+this.id).then(function(response){
                 console.log(response.data[0])
                 m = response.data[0];
               }).catch(function (error) {
                console.log(error);
               });
               this.grupos = m
            },
        },
    }
</script>
