<template>
    <div>
    <v-toolbar fixed app :clipped-left="true" class="white primary--text">
        <v-container fluid fill-height >
            <v-layout align-center justify-center row fill-height >
                <v-flex xs12 lg8>
                    <v-container fluid>
                        <v-layout align-center justify-center>
                            <nuxt-link  to="/">
                                <v-toolbar-title  class="ml-0 pl-3" v-text="title"></v-toolbar-title>
                            </nuxt-link>
                            <v-spacer></v-spacer>
                            <v-text-field
                                    flat
                                    hide-details
                                    label="Search"
                                    class="hidden-xs-only"
                            ></v-text-field>
                            <v-btn
                                    color="primary"
                                    class="white--text hidden-xs-only"
                            >
                                Search
                                <v-icon>search</v-icon>
                            </v-btn>
                            <v-btn icon class="primary--text hidden-sm-and-up">
                                <v-icon>search</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon class="primary--text">
                                <v-icon>shopping_cart</v-icon>
                            </v-btn>

                            <v-btn icon class="primary--text" flat nuxt to="/login">
                                <v-icon>person</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </v-toolbar>
    </div>
</template>

<script lang="ts">
    import Component from 'nuxt-class-component';
    import Vue from 'vue';
    import { Prop } from "vue-property-decorator"

    @Component
    export default class Navigation extends Vue {
        @Prop({type: String, required: true})
        title: string;

        @Prop({type: Boolean, required: true})
        isLogged: boolean;

        name : string = 'Navigation'
    };
</script>


<style scoped>

</style>