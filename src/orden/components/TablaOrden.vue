<template>
<div class="container">
  <div class="row d-flex">
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
      <td>{{ordenTable.nombre}}</td>
      <td>{{ordenTable.fecha}}</td>
      <td>{{ordenTable.estado}}</td>
      <td>{{ordenTable.email}}</td>
      <td> <router-link 
      class="btn mb-2 mt-2"
      :to="`/orden/${ordenTable.id}`"
     >
      Ver
     </router-link></td>
    </tr>  
    
  </tbody>
</table>
  
</div>

  </div>
</div>


</template>

<script>
export default {
  props: {
    ordenTable: Object
  }

}
</script>

<style scoped>
.container {
  color: gray;
  font-family: "Quicksand", sans-serif;
  margin-top: 30px;
}
th {
  margin-right: 2px
}
.btn {
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