<template>
  
  <div class="container">
  <div class="row d-flex mt-5">
    <div class="col-md-12 col-xs-6">
<table class="table">
  <thead>
    <tr>
      <!-- <th scope="col">#</th> -->
     
      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
      <th scope="col">Estado</th>
      <th scope="col">Email</th>
       <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>{{ordenObject.nombre}}</td>
      <td>{{ordenObject.fecha}}</td>
      <td>{{ordenObject.estado}}</td>
      <td>{{ordenObject.email}}</td>
      <td> <router-link class="btn" to="/orden">Volver</router-link></td>
    </tr>  
    
  </tbody>
</table>
  

</div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions({
      ordenById: 'getOrdenByIdApi'
    })
  },
  computed: {
    ...mapState(['ordenObject'])
  },
  created() {
    this.ordenById(this.$route.params.id)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: gray;
  font-family: "Quicksand", sans-serif;
  margin-top: 30px;
 
}
.btn {
  margin: 2px 10px 15px 10px;
  font-size: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 0;
  border-width: 0;
  height: 30px;
  margin-right: 4px; 
  color: gray;
  font-family: "Quicksand", sans-serif;
  background: rgb(206, 211, 241)
}

</style>


<style>

</style>