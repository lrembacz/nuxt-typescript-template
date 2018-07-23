<template>
    <v-container fluid>
        <v-layout fill-height justify-center align-center>
            <v-flex xs12 sm10 md8 lg4>
                <v-container fluid>
                    <v-layout column>
                        <v-flex my-1 class="white">
                            <v-container class="text-xs-center">
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2>Login</h2>
                                    </v-card-title>
                                    <v-form>
                                        <v-text-field
                                                prepend-icon="person"
                                                name="Username"
                                                label="username"
                                                required
                                        />
                                        <v-text-field
                                                prepend-icon="lock"
                                                name="Password"
                                                label="password"
                                                type="password"
                                                required
                                        />
                                        <v-card-text>
                                            <v-layout fill-height justify-center align-center>
                                                <v-flex>
                                                    Forgot password? <nuxt-link to="/remember">Click here</nuxt-link>
                                                </v-flex>
                                            </v-layout>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn primary large block class="primary">Login</v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </v-card>
                            </v-container>
                        </v-flex>
                        <v-flex my-1 class="white">
                            <v-container class="text-xs-center">
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2>Register</h2>
                                    </v-card-title>
                                    <v-form>
                                        <v-card-actions>
                                            <v-btn primary large block class="primary">Create account</v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </v-card>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import { Vue } from 'vue-property-decorator';
    import Component, { namespace } from 'nuxt-class-component';

    import { authModule } from '../../store/modules/index';
    const AuthModule = namespace(authModule.AuthStore.id);

    @Component({
        layout: 'auth'
    })
    export default class extends Vue {
        email = '';
        password = '';
        @AuthModule.Action doLogin: any;
        submit () {
            this.doLogin({ email: this.email, password: this.password });
        }
    }
</script>

<style scoped>
    .headline {
        color: #e91e63;
        border-left: 1rem solid #e91e63;
        padding-left: 1rem;
        margin-left: -1.125rem;
    }
</style>