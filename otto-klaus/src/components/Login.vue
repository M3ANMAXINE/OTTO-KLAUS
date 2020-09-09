<template>
<div>
    <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
        <h1 class="mx-auto">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="userName" label="userName" prepend-icon="mdi-account-circle"  />
          <v-text-field v-model="password" label="password" 
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"/> 
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="input">Register</v-btn> 
        <v-spacer></v-spacer>      
        <v-btn @click.prevent="login" color="success">Login</v-btn>
      </v-card-actions>
    </v-card>
</div>
</template>

<script>
import firebase from 'firebase'
import {mapActions} from 'vuex'
export default {
   data: () => ({
     showPassword: false,
     userName: '',
     password: ''
    
  }),
  methods: {
 ...mapActions(['setUser']),
          login() {
      firebase.auth().signInWithEmailAndPassword(this.userName, this.password).then(() => {
        this.setUser(this.userName)
        this.$router.push('/juguetes')
      }).catch(() => {
        alert('usuario')
      })

    }
  }

}
</script>

<style>

</style>