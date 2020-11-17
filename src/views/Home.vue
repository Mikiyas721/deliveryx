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

            <v-btn
                    route="/about"
                    target="_blank"
                    color="white purple--text"
                    elevation="0"
                    class="mr-2"
            >
                <span class="mr-2">About Us</span>
            </v-btn>
            <v-btn
                    route="/about"
                    target="_blank"
                    color="white purple--text"
                    elevation="0"
                    class="mr-2"
            >
                <span class="mr-2">Admin</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-col class="ml-13 mt-16">
                <v-row>
                    <v-col class="mt-7">
                        <h1 id="leftText">Food <br> Delivery</h1>
                        <h3 id="leftCaption">Partners with some of the best hotels and restaurant<br> in town. At your
                            door step with fresh meal from your<br>favourite restaurant.</h3>
                        <v-row class="ml-5 mt-3">
                            <v-btn class="ml-12 mr-6" rounded="true" width="120" height="50" color="purple--text"
                                   to="/about">Login
                                <v-icon>mdi-login</v-icon>
                            </v-btn>
                            <v-btn class="ml-6" color="purple white--text" rounded="true" width="120" height="50">Sign
                                Up
                            </v-btn>
                        </v-row>
                    </v-col>
                    <FoodSlider></FoodSlider>
                </v-row>
            </v-col>
        </v-main>
    </v-app>
</template>

<script>
    import FoodSlider from "../components/FoodSlider";

    export default {
        name: 'Home',
        components: {FoodSlider}
    }
</script>

<style scoped>
    #leftText {
        font-size: 40px;
        color: purple;
        margin-bottom: 10px;
    }

    #leftCaption {
        color: mediumpurple;
        margin-bottom: 20px;
    }
</style>
