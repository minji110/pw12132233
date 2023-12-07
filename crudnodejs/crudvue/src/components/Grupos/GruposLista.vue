<template>
    <div class="GruposLista">
        <span  class="letra-grande-titulo nito">Oferta de Grupos</span> <p></p>
        <table>
            <thead>
                <th>Clave Materia</th>
                <th>Clave Grupo</th>
                <th>Clave Maestro</th>
                <th>Limite</th>
                <th>Inscritos</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="grupo in grupos" :key="grupo.CLAVEGRUPO">
                    <td>{{ grupo.CLAVEMATERIA }}</td>
                    <td>
                        <a href="" @click.prevent="detalleGrupos(grupo.CLAVEGRUPO)">{{ grupo.CLAVEGRUPO }}</a>
                    </td>
                    <td>{{ grupo.CLAVEMAESTRO }}</td>
                    <td>{{ grupo.LIMITEALUMNOS }}</td>
                    <td>{{ grupo.INSCRITOS }}</td>
                    <td>{{ grupo.HORARIOLUNES }}</td>
                    <td>{{ grupo.HORARIOMARTES }}</td>
                    <td>{{ grupo.HORARIOMIERCOLES }}</td>
                    <td>{{ grupo.HORARIOJUEVES }}</td>
                    <td>{{ grupo.HORARIOVIERNES }}</td>
                    <td>
                        <button @click.prevent="editarGrupo(grupo.CLAVEGRUPO)">Editar</button>
                        <button @click.prevent="eliminarGrupo(grupo.CLAVEGRUPO)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p></p>
        <button id="boton-nuevo" @click="nuevoGrupo()">Nuevo</button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes'
    export default {
        name: "GruposLista",
        data(){
            return{
                grupos: [],
            };
        },
        created(){
            this.traeGrupos();
        },
        methods:{
            traeGrupos: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/grupos").then(function(response){
                 console.log(response.data)
                 m = response.data
               }).catch(function (error) {
                console.log(error);
               });
               this.grupos = m
            },
            detalleGrupos: function(id){
                this.$router.push({name: "gruposdetalle", params: { id: id }})
            },
            eliminarGrupo: async function(id){
                const res = await axios.delete(URL_DATOS+"/grupos/"+id);
                this.traeGrupos();
                console.log(res);
            },
            editarGrupo: function(id){
                this.$router.push({name: "gruposeditar", params: { id: id }})
            },
            nuevoGrupo: async function(){
                this.$router.push({name: "gruposnuevo", params: { }})
            }
        }
    }
</script>

<style lang="css">

@import '../../assets/estilos/estiloGrupoLista.css';

</style>