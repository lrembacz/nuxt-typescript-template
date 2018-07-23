<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <div class="text-md-center">
        <h1 class="display-2">
          {{ error.statusCode }}
        </h1>
        <h2>
          {{ error.message }}
        </h2>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['error']
}
</script>
