<template>
    <v-col class="ml-13 mt-16">
        <v-row>
            <v-col class="mt-7">
                <h1 id="leftText">Food <br> Delivery</h1>
                <h3 id="leftCaption">Partners with some of the best hotels and restaurant<br> in town. At your door step with fresh meal from your<br>favourite restaurant.</h3>
                <v-row class="ml-5 mt-3">
                    <v-btn class="ml-12 mr-6" rounded="true" width="120" height="50" color="purple--text">Log In</v-btn>
                    <v-btn class="ml-6" color="purple white--text" rounded="true" width="120" height="50">Sign Up</v-btn>
                </v-row>
            </v-col>
                    <v-img contain="true" class="mr-16" width="200" height="400" src="../assets/image.jpg">
                    </v-img>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'Home',
        components: {
        }
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
