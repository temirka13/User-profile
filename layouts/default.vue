<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>User profile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="$cookies.get('user-token')" text @click.prevent="logout">
        Loguot
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>
