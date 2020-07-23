<template>
  <div v-if="user" class="user-profile text-center">
    <v-img :src="user.img" class="user-profile__img">
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <h1 class="user-profile__name">
      {{ user.name }}
    </h1>
    <p class="user-profile__text">
      {{ user.email }}
    </p>
    <p class="user-profile__text">
      <a :href="user.github" target="_blank" class="user-profile__link">
        {{ user.github }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      default: {}
    }
  }
}
</script>

<style scoped>
.user-profile__img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.user-profile__name {
  margin: 10px 0px;
}
.user-profile__text {
  font-size: 18px;
  margin-bottom: 8px;
}
.user-profile__link {
  text-decoration: none;
  color: #fff;
  transition: all 0.1s ease;
}
.user-profile__link:hover {
  color: gray;
}
</style>
