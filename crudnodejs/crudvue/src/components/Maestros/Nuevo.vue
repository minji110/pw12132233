<template>
    <div class="Nuevo">
        <h2>Nuevo Maestro</h2>
        <p></p>
        <label for="txtclave">Clave: </label>
        <input 
            type="text" 
            name="txtclave" 
            id="txtclave" 
            v-model="maestros.CLAVEMAESTRO" 
            class="form-control" 
        />
        <p></p>
        <label for="txtnombre">Nombre: </label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="maestros.NOMBRE" 
            class="form-control" 
        />
        <p></p>
        <label for="txtdepartamento">Departamento: </label>
        <input 
            type="text" 
            name="txtdepartamento" 
            id="txtdepartamento" 
            v-model="maestros.DEPARTAMENTO" 
            class="form-control" 
        />
        <p></p>
        <label for="txtestatus">Estatus: </label>
        <select name="cmbestatus" id="cmbestatus" v-model="estatusSeleccionado">
            <option value="-1" disabled selected>SELECCIONA UNA OPCION</option>
            <option value="V">V</option>
            <option value="B">B</option>
            <option value="E">E</option>
        </select>
        <p></p>
        <button @click.prevent="nuevo()">
            Nuevo Maestro
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
                maestros: [],
                estatusSeleccionado: null,
            }
        },
        mounted(){},
        methods:{
            nuevo: async function(){
                const res = await axios.post(URL_DATOS+"/maestros/", {
                    cla: this.maestros.CLAVEMAESTRO,
                    nom: this.maestros.NOMBRE, 
                    dep: this.maestros.DEPARTAMENTO,
                    est: this.estatusSeleccionado,
                });
                console.log(res);
            }
        }
    }
</script>