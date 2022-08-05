<template>
   <div class="container">
     <h1>Ingresa tus datos para registro</h1>
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="registroUsuario({email: email, password: password})">

          <div class="mb-3">
            <label for="InputEmail" class="form-label"
              >Ingrese su correo</label
            >
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label"
              >Ingrese su contraseña</label
            >
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              v-model="password"
            />
          </div>

          <button type="submit" class="btn">Registrar</button>
        </form>
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
data() {
    return {
      email: "",
      password: ""
    }
  },
methods: {
    ...mapActions(['registroUsuario'])
  },
}
</script>

<style scoped>
.container {
  
  font-family: 'Quicksand', sans-serif;
  margin-top: 20px;
  color: gray;
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  margin-top: 50px
}
.label {
  color: gray;
  font-family: 'Quicksand', sans-serif;
  
}
.btn {
  color: gray;
  background: rgb(240, 212, 240)
}

</style>