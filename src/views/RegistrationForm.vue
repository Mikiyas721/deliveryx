<template>
    <v-app>
        <v-app-bar
                app
                elevation="0"
                color="white">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-4 ml-10"
                    contain
                    src="../assets/logo.jpg"
                    transition="scale-transition"
                    width="40"
            />
            <h2 class="color: purple--text">X Delivery</h2>
            <v-spacer></v-spacer>
            <v-btn elevation="0" color="white purple--text" class="mr-10">
                <v-icon class="mr-1">mdi-home</v-icon>
                Home
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-row>
                <v-card elevation="10" style="margin-left: 100px" class="mr-10 mt-3 pl-5 pr-5 pb-5">
                    <v-card-title>
                        Register
                    </v-card-title>
                    <v-text>
                        <v-col>
                            <v-row>
                                <v-text-field class="mr-3" :rules="[rules.required]" label="First Name"></v-text-field>
                                <v-text-field label="Last Name"></v-text-field>
                            </v-row>
                            <v-text-field :rules="[rules.required]" label="Phone Number"></v-text-field>
                            <v-text-field :rules="[rules.email]" label="Email"></v-text-field>
                            <v-text-field :rules="[rules.required]" label="Password"></v-text-field>
                            <v-text-field :rules="[rules.required]" label="Repeat Password"></v-text-field>
                        </v-col>
                    </v-text>
                    <v-actions>
                        <v-btn rounded color="purple white--text" style="margin-left: 120px" width="150">Register
                        </v-btn>
                    </v-actions>
                </v-card>
                <FoodSlider></FoodSlider>
            </v-row>
        </v-main>
    </v-app>
</template>
<script>
    import FoodSlider from "../components/FoodSlider";

    export default {
        name: 'RegistrationForm',
        components: {
            FoodSlider
        },
        data() {
            return {
                title: 'Report',
                email: '',
                rules: {
                    required: value => !!value || 'Required.',
                    counter: value => value.length <= 20 || 'Max 20 characters',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    }
                }
            }
        }

    }
</script>