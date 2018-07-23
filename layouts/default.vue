<template>
  <v-app>
    <Navigation :title="title" :isLogged="isLogged"/>
    <v-content>
        <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
    import { Vue, Prop, Watch } from 'vue-property-decorator';
    import Component, { namespace } from 'nuxt-class-component';
    import { Container } from '~/core';
    import Navigation from '~/components/Navigation/Navigation.vue'
    import Footer from '~/components/Footer/Footer.vue'

    import { authModule } from '~/store/modules';
    const AuthModule = namespace(authModule.AuthStore.id);

    @Component({
        components: {
            Navigation,
            Footer
        }
    })
    export default class extends Vue {

        @AuthModule.State isLogged: boolean;

        title: string = 'TypescriptTemplate'
    };
</script>

<style>
</style>