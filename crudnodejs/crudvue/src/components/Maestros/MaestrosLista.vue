<template>
    <div class="MaestrosLista">
        <span class="letra-grande-titulo nito">Hola maestros</span> <p></p>
        <!-- <button @click.prevent="traeMaestros()">Datos</button> <p></p> -->
        <table>
            <thead>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="maestro in maestros" :key="maestro.CLAVEMAESTRO">
                    <td>
                        <a href="" @click.prevent="detalleMaestros(maestro.CLAVEMAESTRO)">{{ maestro.CLAVEMAESTRO }}</a>
                    </td>
                    <td>{{ maestro.NOMBRE }}</td>
                    <td>{{ maestro.DEPARTAMENTO }}</td>
                    <td>{{ maestro.ESTATUS }}</td>

                    <td>
                        <button @click.prevent="editarMaestro(maestro.CLAVEMAESTRO)">Editar</button>
                        <button @click.prevent="eliminarMaestro(maestro.CLAVEMAESTRO)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p></p>
        <button id="boton-nuevo" @click="nuevoMaestro()">Nuevo</button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes'
    export default {
        name: "MaestrosLista",
        data(){
            return{
                maestros: []
            }
        },
        created(){
            this.traeMaestros();
        },
        methods:{
            traeMaestros: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/maestros").then(function(response){
                 console.log(response.data)
                 m = response.data
               }).catch(function (error) {
                console.log(error);
               });
               this.maestros = m
            },
            detalleMaestros: function(id){
                this.$router.push({name: "maestrosdetalle", params: { id: id }})
            },
            editarMaestro: function(id){
                this.$router.push({name: "maestroseditar", params: { id: id }})
            },
            eliminarMaestro: async function(id){
                const res = await axios.delete(URL_DATOS+"/maestros/"+id);
                this.traeMaestros();
                console.log(res);
            },
            nuevoMaestro: function(){
                this.$router.push({name: "maestrosnuevo", params: { }})
            }
        }
    }
</script>

<!-- <style>
    .MaestrosLista{
        border: 1px solid red;
    }
</style> -->