<template>
  <v-app>
    <v-app-bar app color="info" dark>
      <v-toolbar-title>EduTecno</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!currentUser" to="/" text >Home</v-btn> 
      <v-btn to="/juguetes" v-if="currentUser" text >Juguetes</v-btn> 
      <v-btn v-if="currentUser" @click.prevent="logout" text>LOGOUT</v-btn> 

    </v-app-bar>    
    <v-main>
     <router-view></router-view>
    </v-main>

    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>M3ANMAXINE</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import firebase from 'firebase'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut().then( () => {
        this.$router.push('/')
        this.setUser(undefined)
      })
    }
  },
};
</script>
