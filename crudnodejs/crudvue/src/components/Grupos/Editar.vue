<template>
    <div class="Editar">
        <h2>Datos del Grupo</h2>
        <p></p>
        <label for="txtclavemaestro">Clave Maestro: </label>
        <input 
            type="text" 
            name="txtclavemaestro" 
            id="txtclavemaestro" 
            v-model="grupos.CLAVEMAESTRO" 
            class="form-control" 
        />
        <p></p>
        <label for="txtlimitealumnos">Limite Cupo: </label>
        <input 
            type="text" 
            name="txtlimitealumnos" 
            id="txtlimitealumnos" 
            v-model="grupos.LIMITEALUMNOS" 
            class="form-control" 
        />
        <p></p>
        <label for="txtinscritos">Cantidad Inscritos: </label>
        <input 
            type="text" 
            name="txtinscritos" 
            id="txtinscritos" 
            v-model="grupos.INSCRITOS" 
            class="form-control" 
        />
        <p></p>
        <label for="txthoralunes">Lunes: </label>
        <input 
            type="text" 
            name="txthoralunes" 
            id="txthoralunes" 
            v-model="grupos.HORARIOLUNES" 
            class="form-control" 
        />
        <p></p>
        <label for="txthoramartes">Martes: </label>
        <input 
            type="text" 
            name="txthoramartes" 
            id="txthoramartes" 
            v-model="grupos.HORARIOMARTES" 
            class="form-control" 
        />
        <p></p>
        <label for="txthoramiercoles">Miercoles: </label>
        <input 
            type="text" 
            name="txthoramiercoles" 
            id="txthoramiercoles" 
            v-model="grupos.HORARIOMIERCOLES" 
            class="form-control" 
        />
        <p></p>
        <label for="txthorajueves">Jueves: </label>
        <input 
            type="text" 
            name="txthorajueves" 
            id="txthorajueves" 
            v-model="grupos.HORARIOJUEVES" 
            class="form-control" 
        />
        <p></p>
        <label for="txthoraviernes">Viernes: </label>
        <input 
            type="text" 
            name="txthoraviernes" 
            id="txthoraviernes" 
            v-model="grupos.HORARIOVIERNES" 
            class="form-control" 
        />
        <p></p>
        <button @click.prevent="actualizar()">
            Actualizar Grupo
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
               this.grupos = m;
            },

            actualizar: async function () {
                const res = await axios.put(URL_DATOS+"/grupos/"+this.id, {
                    clamae: this.grupos.CLAVEMAESTRO, 
                    limalu: this.grupos.LIMITEALUMNOS,
                    ins: this.grupos.INSCRITOS,
                    horlun: this.grupos.HORARIOLUNES,
                    hormar: this.grupos.HORARIOMARTES,
                    hormie: this.grupos.HORARIOMIERCOLES,
                    horjue: this.grupos.HORARIOJUEVES,
                    horvie: this.grupos.HORARIOVIERNES
                });
                console.log(res);
            },
        },
    }
</script>