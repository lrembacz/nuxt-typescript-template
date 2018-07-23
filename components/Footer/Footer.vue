<template>
  <v-footer
          height="auto"
  >
    <v-card
            class="flex"
            flat
            tile
    >
      <v-card-actions class="grey darken-2 justify-center white--text">
        &copy;2018
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
    import Component from 'nuxt-class-component';
    import Vue from 'vue';

    @Component
    export default class Footer extends Vue {

    };
</script>
