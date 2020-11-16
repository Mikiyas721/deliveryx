<template>
    <v-app>
        <v-app-bar
                app
                elevation="0"
                color="white"
        >
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-4 ml-10"
                    contain
                    src="./assets/logo.jpg"
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
                <span class="mr-2">Home</span>
            </v-btn>
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
            <Home></Home>
        </v-main>
    </v-app>
</template>

<script>
    import Home from './views/Home'

    export default {
        name: 'App',

        components: {
            Home
        },

        data: () => ({
            //
        }),
    };
</script>
<style scoped>

</style>