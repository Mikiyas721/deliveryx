<template>
    <v-container>
        <v-app-bar app elevation="0" color="white">
            <v-spacer></v-spacer>
            <v-btn
                    color="primary white--text"
                    rounded="true"
                    width="130"
                    height="40"
                    class="mr-12"
            > Log Out
                <v-icon class="ml-1">mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer fixed="true" color="primary">
            <v-list>
                <v-list-item color="white" v-for="item in links" :key="item.text" router :to="item.route">
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>{{item.text}}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
    export default {
        name: "Admin",
        data: () => ({
            links: [
                {icon: 'mdi-arrow-up-bold-box-outline', text: 'Biker', route: '/biker'},
                {icon: 'mdi-email', text: 'Customer', route: '/customer'},
            ]
        })
    }
</script>

<style scoped>

</style>