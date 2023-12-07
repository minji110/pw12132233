<template>
    <div class="Nuevo">
        <h2>Nueva Materia</h2>
        <p></p>
        <label for="txtclave">Clave: </label>
        <input 
            type="text" 
            name="txtclave" 
            id="txtclave" 
            v-model="materias.CLAVEMATERIA" 
            class="form-control" 
        />
        <p></p>
        <label for="txtnombre">Nombre: </label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="materias.NOMBRE" 
            class="form-control" 
        />
        <p></p>
        <label for="txtcreditos">Creditos: </label>
        <input 
            type="text" 
            name="txtcreditos" 
            id="txtcreditos" 
            v-model="materias.CREDITOS" 
            class="form-control" 
        />
        <p></p>
        <button @click.prevent="nuevo()">
            Nueva Materia
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
                materias: [],
            }
        },
        mounted(){},
        methods:{
            nuevo: async function(){
                const res = await axios.post(URL_DATOS+"/materias/", {
                    cla: this.materias.CLAVEMATERIA,
                    nom: this.materias.NOMBRE, 
                    cre: this.materias.CREDITOS,
                });
                console.log(res);
            }
        }
    }

</script>