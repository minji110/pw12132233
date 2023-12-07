import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alumnos from '../views/Alumnos.vue'
import AlumnosDetalle from '../components/Alumnos/Detalle.vue'
import AlumnosEditar from '../components/Alumnos/Editar.vue'
import AlumnosNuevo from '../components/Alumnos/Nuevo.vue'
import Maestros from '../views/Maestros.vue'
import MaestrosDetalle from '../components/Maestros/Detalle.vue'
import MaestrosEditar from '../components/Maestros/Editar.vue'
import MaestrosNuevo from '../components/Maestros/Nuevo.vue'
import Materias from '../views/Materias.vue'
import MateriasDetalle from '../components/Materias/Detalle.vue'
import MateriasEditar from '../components/Materias/Editar.vue'
import MateriasNuevo from '../components/Materias/Nuevo.vue'
import Grupos from '../views/Grupos.vue'
import GruposDetalle from '../components/Grupos/Detalle.vue'
import GruposEditar from '../components/Grupos/Editar.vue'
import GruposNuevo from '../components/Grupos/Nuevo.vue'
import cargarGrupo from '../components/CargaGrupo/NuevaCarga.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: Alumnos
  },
  {
    path: '/alumnosdetalle',
    name: 'alumnosdetalle',
    component: AlumnosDetalle,
    props: true
  },
  {
    path: '/alumnoseditar',
    name: 'alumnoseditar',
    component: AlumnosEditar,
    props: true
  },
  {
    path: '/alumnosnuevo',
    name: 'alumnosnuevo',
    component: AlumnosNuevo
  },
  {
    path: '/maestros',
    name: 'maestros',
    component: Maestros
  },
  {
    path: '/maestrosdetalle',
    name: 'maestrosdetalle',
    component: MaestrosDetalle,
    props: true
  },
  {
    path: '/maestroseditar',
    name: 'maestroseditar',
    component: MaestrosEditar,
    props: true
  },
  {
    path: '/maestrosnuevo',
    name: 'maestrosnuevo',
    component: MaestrosNuevo
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/materiasdetalle',
    name: 'materiasdetalle',
    component: MateriasDetalle,
    props: true
  },
  {
    path: '/materiaseditar',
    name: 'materiaseditar',
    component: MateriasEditar,
    props: true
  },
  {
    path: '/materiasnuevo',
    name: 'materiasnuevo',
    component: MateriasNuevo
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: Grupos
  },
  {
    path: '/gruposdetalle',
    name: 'gruposdetalle',
    component: GruposDetalle,
    props: true
  },
  {
    path: '/gruposeditar',
    name: 'gruposeditar',
    component: GruposEditar,
    props: true
  },
  {
    path: '/gruposnuevo',
    name: 'gruposnuevo',
    component: GruposNuevo
  },

  {
    path: '/cargarGrupo',
    name: 'cargarGrupo',
    component: cargarGrupo
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router