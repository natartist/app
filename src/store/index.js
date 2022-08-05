import router from '@/router';
import { authUser } from '@/utils/user-auth';
import { createStore } from 'vuex'


export default createStore({
  state: {
    ordenes: [],
    ordenObject: {},
    usuarioLogeado: null,
    usuariosApi: []
  },
  //los mutations de los dos sistemas de rutas renderizados
  mutations: {
    setOrdenes(state, payload) {
      state.ordenes = payload;
    },
    setOrdenById(state, payload) {
      state.ordenObject = payload;
    },
    setUsuario(state, payload) {
      state.UsuarioLogeado = payload;
    },
    setUsuariosApi(state, payload) {
     state.usuariosApi = payload; 
    }

  },
  //action para lista de ordenes, detalle, login y registro.
  actions: {
    async getOrdenesApi({commit}) {
      try {
        const response = await fetch('http://localhost:3000/orden');
        const data = await response.json();
        console.log(data);  
        commit('setOrdenes', data);
      } catch (error) {
        throw error;
      }
    },
    async getOrdenByIdApi({commit}, id) {
      try {
        const response = await fetch(`http://localhost:3000/orden/${id}`);
        const data = await response.json();
        commit('setOrdenById', data);
      } catch (error) {
        throw error;
      }
     },
     async loginUsuario({commit}, usuario) {
      let existe;
      // console.log(usuario);¡
      // *validaciones!!!
      const usuarioLogeado = {
        email: usuario.email,
        password: usuario.password
      };
      try {
        const response = await fetch('http://localhost:3000/usuarios');
        const data = await response.json();
        console.log(data); // *El arreglo con el unico objeto que es el usuario
        //* [{}]
        commit('setUsuariosApi', data)
        existe = data.some(user => user.email === usuarioLogeado.email && user.password === usuarioLogeado.password);
        console.log(existe);
  
      } catch (error) {
        throw error;
      }
      commit('setUsuario', usuarioLogeado)
      authUser(existe);
      router.push('/orden')
     },
  
     async registroUsuario ({commit}, usuario) {
        try {
          await fetch('http://localhost:3000/usuarios',{
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          router.push('/login')
        } catch (error) {
          throw error;
        }
      
     }
  },
  getters: {
  },
  modules: {
  }
})
