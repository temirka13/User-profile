<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex>
      <user-profile :user="userInfo" class="mt-50" />
    </v-flex>
  </v-layout>
</template>

<script>
const UserProfile = () => import('@/components/UserProfile')
export default {
  middleware: ['auth'],
  components: {
    UserProfile
  },
  computed: {
    userInfo () {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
.mt-50 {
  margin-top: 50px;
}
</style>
