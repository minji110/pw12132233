<template>
    <div class="Nuevo">
        <h2>Nuevo Alumno</h2>
        <p></p>
        <label for="txtncontrol">Numero de control: </label>
        <input 
            type="text" 
            name="txtncontrol" 
            id="txtncontrol" 
            v-model="alumnos.NCONTROL" 
            class="form-control" 
        />
        <p></p>
        <label for="txtnombre">Nombre: </label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="alumnos.NOMBRE" 
            class="form-control" 
        />
        <p></p>
        <label for="txtcarrera">Carrera: </label>
        <input 
            type="text" 
            name="txtcarrera" 
            id="txtcarrera" 
            v-model="alumnos.CARRERA" 
            class="form-control" 
        />
        <p></p>
        <label for="cmbestatus">Estatus: </label>
        <select name="txtestatus" id="txtstatus" v-model="estatusSeleccionado">
            <option value="-1" disabled selected>SELECCIONA UNA OPCION</option>
            <option value="V">V</option>
            <option value="B">B</option>
            <option value="E">E</option>
        </select>
        <p></p>
        <button id="boton-nuevo" @click.prevent="nuevo()">
            Nuevo Alumno
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes';

    export default {
        name: "Nuevo",
        components:{ },
        data(){
            return{
                alumnos: [],
                estatusSeleccionado: null,
            }
        },
        mounted(){},
        methods:{
            nuevo: async function(){
                const res = await axios.post(URL_DATOS+"/alumnos/", {
                    nco: this.alumnos.NCONTROL,
                    nom: this.alumnos.NOMBRE, 
                    car: this.alumnos.CARRERA,
                    est: this.estatusSeleccionado,
                });
                console.log(res);
            }
        }
    }
</script>