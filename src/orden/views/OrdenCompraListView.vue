<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 col-xs-12">
  <h1>Listado de Órdenes de Compra</h1> 
  </div> 
  </div>
   <div class="row d-flex">
<TablaOrden v-for="orden of ordenes" :key="orden.id" :ordenTable="orden"/>

   </div>
   </div>

<!-- <pre>{{ ordenes}}</pre> -->
</template>

<script>

import { mapActions, mapState } from 'vuex';
import TablaOrden from "../components/TablaOrden.vue"
export default {
  name: "homeView",
  components: {
    TablaOrden
  },
   methods: {
     ...mapActions({
      orden: 'getOrdenesApi'
    })
   },
   computed: {
     ...mapState(['ordenes'])
  },
  created() {
    this.orden();
  }

   }

 
</script>

<style>
.container {
  color: gray;
  font-family: "Quicksand", sans-serif;
  margin-top: 30px;
   /* display: flex;
  align-items: center;
  justify-content: center; */
}
h1 {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 70px;
  text-align: center;

}
.table {
  color: gray;
  margin: 20px;
}

</style>