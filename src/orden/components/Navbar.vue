<template>
 <nav class="navbar fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Órdenes de Compra</a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> -->
        
      </ul>
    </div>

    <button @click="logout()">
      Logout
    </button>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
nav {
  box-shadow: 2px 2px 5px 0;
  /* border-radius: 10px; */
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: gray;
  padding: 10px 50px 10px 50px;
  
}
.navbar {
  background: rgb(206, 211, 241)
}
a {
  color: gray;
}
button {
  /* background-color: #ddf7f2; */
  font-size: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 0;
  border-width: 0;
  height: 35px;
  width: 100px;
  /* margin-bottom: 4px; */
  color: gray;
  font-family: "Quicksand", sans-serif;
}
</style>