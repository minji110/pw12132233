<template>
    <div class="AlumnosLista">
       <span class="letra-grande-titulo nito"> Hola alumnos</span> <p></p>
        <table>
            <thead>
                <th>NumControl</th>
                <th>Nombre</th>
                <th>Carrera</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="alumno in alumnos" :key="alumno.NCONTROL">
                    <td>
                        <a href="" @click.prevent="detalleAlumnos(alumno.NCONTROL)">{{ alumno.NCONTROL }}</a>
                    </td>
                    <td>{{ alumno.NOMBRE }}</td>
                    <td>{{ alumno.CARRERA }}</td>
                    <td>{{ alumno.ESTATUS }}</td>

                    <td>
                        <button @click.prevent="editarAlumno(alumno.NCONTROL)">Editar</button>
                        <button @click.prevent="eliminarAlumno(alumno.NCONTROL)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p></p>
        <button id="boton-nuevo" @click="nuevoAlumno()">Nuevo</button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes'
    export default {
        name: "AlumnosLista",
        data(){
            return{
                alumnos: []
            }
        },
        created(){
            this.traeAlumnos();
        },
        methods:{
            traeAlumnos: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/alumnos").then(function(response){
                 console.log(response.data)
                 m = response.data
               }).catch(function (error) {
                console.log(error);
               });
               this.alumnos = m
            },
            detalleAlumnos: function(id){
                this.$router.push({name: "alumnosdetalle", params: { id: id }})
            },
            editarAlumno: function(id){
                this.$router.push({name: "alumnoseditar", params: { id: id }})
            },
            eliminarAlumno: async function(id){
                const res = await axios.delete(URL_DATOS+"/alumnos/"+id);
                this.traeAlumnos();
                console.log(res);
            },
            nuevoAlumno: function(){
                this.$router.push({name: "alumnosnuevo", params: { }})
            }
        }
    }
</script>