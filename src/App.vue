<template>
    <v-app>
        <Admin></Admin>
    </v-app>
</template>

<script>
    //import Home from './views/Home'
    //import RegistrationForm from './views/RegistrationForm'
    import Admin from './views/admin/Admin'

    export default {
        name: 'App',
        components: {
            //Home,
            Admin
        },
        data: () => ({
            //
        }),
    };
</script>
<style scoped>

</style>