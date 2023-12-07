<template>
    <div class="MateriasLista">
        <span class="letra-grande-titulo nito">Repertorio de Materias</span> <p></p>
        <table>
            <thead>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Creditos</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="materia in materias" :key="materia.CLAVEMATERIA">
                    <td>
                        <a href="" @click.prevent="detalleMaterias(materia.CLAVEMATERIA)">{{ materia.CLAVEMATERIA }}</a>
                    </td>
                    <td>{{ materia.NOMBRE }}</td>
                    <td>{{ materia.CREDITOS }}</td>

                    <td>
                        <button @click.prevent="editarMateria(materia.CLAVEMATERIA)">Editar</button>
                        <button @click.prevent="eliminarMateria(materia.CLAVEMATERIA)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p></p>
        <button id="boton-nuevo" @click="nuevaMateria()">Nuevo</button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes'
    export default {
        name: "MateriasLista",
        data(){
            return{
                materias: []
            }
        },
        created(){
            this.traeMaterias();
        },
        methods:{
            traeMaterias: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/materias").then(function(response){
                 console.log(response.data)
                 m = response.data
               }).catch(function (error) {
                console.log(error);
               });
               this.materias = m
            },
            detalleMaterias: function(id){
                this.$router.push({name: "materiasdetalle", params: { id: id }})
            },
            editarMateria: function(id){
                this.$router.push({name: "materiaseditar", params: { id: id }})
            },
            eliminarMateria: async function(id){
                const res = await axios.delete(URL_DATOS+"/materias/"+id);
                this.traeMaterias();
                console.log(res);
            },
            nuevaMateria: function(){
                this.$router.push({name: "materiasnuevo", params: { }})
            }
        }
    }
</script>