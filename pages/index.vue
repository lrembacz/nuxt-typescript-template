<template>
  <v-container fill-height>
    <v-layout fill-height justify-center align-center>
      <v-flex xs12 sm10 class="white">
      <v-card>
        <v-card-title class="headline">Home page</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
