<template>
    <div class="Editar">
        <h2>Datos del Maestro</h2>
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
        <button @click.prevent="actualizar()">
            Actualizar Maestro
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_DATOS } from '@/utils/constantes';
import { re } from 'semver';
    export default{
        name: "Detalle",
        components: {},
        props:{
            id: Number,
        },
        data: function(){
            return{
                maestros: [],
                estatusSeleccionado: null,
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
               this.maestros = m;
            },

            actualizar: async function () {
                // console.log(this.maestros.nombre);
                const res = await axios.put(URL_DATOS+"/maestros/"+this.id, {
                    nom: this.maestros.NOMBRE, 
                    dep: this.maestros.DEPARTAMENTO,
                    est: this.estatusSeleccionado,
                });
                console.log(res);
            },
        },
    }
</script>