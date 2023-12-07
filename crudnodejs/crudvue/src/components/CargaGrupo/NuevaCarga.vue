<template>
    <div class="NuevaCarga">
        <h2>Datos de la carga</h2>
        <br>
        <label for="txtclave">Numero de control:</label>
        <input type="number" name="txtclave" id="txtclave" v-model="carga.ncontrol" class="form-control">
        <button type="submit"  id="boton-carga" @click.prevent="verificarAlumno()">Buscar</button>
        <br>
        <label for="txtmateria">Materia:</label>
        <input type="text" name="txtmateria" id="txtmateria" v-model="carga.clavemateria" v-bind:disabled="camposDeshabilitados" class="form-control">
        <br>
        <label for="txtgrupo">Grupo:</label>
        <input type="text" name="txtgrupo" id="txtgrupo" v-model="carga.clavegrupo"  v-bind:disabled="camposDeshabilitados" class="form-control">
        <br>
        <button @click.prevent="nuevaCarga()" v-bind:disabled = "camposDeshabilitados">Cargar Alumno</button>
    </div>
</template>
<script>
import { URL_DATOS } from '../../utils/constantes';
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: "nuevaCarga",
    components: {},
    data() {
        return {
            carga: [],
            camposDeshabilitados: true
        };
    },
    methods: {
        nuevaCarga: async function () {
            try{

            
            //validar si hay cupo en el ggrupo
            const cupo = await axios.get(URL_DATOS + "/grupos/" + this.carga.clavegrupo)
            const limite = cupo.data[0].LIMITEALUMNOS;
            let inscritos = cupo.data[0].INSCRITOS;

            if ((inscritos + 1) > limite) {
                Swal.fire({
                    icon: "error",
                    title: "ADVERTENCIA",
                    text: "CUPO LIMITE ALCANZADO:" + limite,
                });
                //window.location.reload();
            } else {
                const res = await axios.post(URL_DATOS + "/carga", {
                    clavemateria: this.carga.clavemateria,
                    clavegrupo: this.carga.clavegrupo,
                    ncontrol: this.carga.ncontrol,
                })
                const aumento = await axios.put(URL_DATOS + "/inscribir/" + this.carga.clavegrupo, {
                    clavegrupo: this.carga.clavegrupo,
                });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Carga Realizada",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }catch(error){
            Swal.fire({
                    icon: "error",
                    title: "ADVERTENCIA",
                    text: "ERROR PAPITO",
                })
        }
        },

        verificarAlumno: async function () {
            const res =await axios.get(URL_DATOS + "/alumnos/" + this.carga.ncontrol)

                if(res.data[0]!= undefined){
                    this.camposDeshabilitados=false
                }
                else{
                    Swal.fire({
                    icon: "error",
                    title: "ADVERTENCIA",
                    text: "NUMERO DE CONTROL NO EXISTENTE",
                });
                }
        }
        
    }
}

function deshabilitarCampos() {
let campo = document.getElementById('txtmateria');
  campo.disabled = true;
}
</script>