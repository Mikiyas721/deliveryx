<template>
    <v-col>
        <v-carousel
                style="width: 700px"
                height="450px"
                class="mr-16"
                cycle
                interval="4500"
                hide-delimiters="true"
        >
            <v-carousel-item v-for="(url,i) in urls" :key="i" :src="url"
                             style="width: 700px" show-arrows-on-hover="true">
            </v-carousel-item>
        </v-carousel>
    </v-col>
</template>

<script>
    export default {
        name: 'FoodSlider',
        data: () => ({
            urls: [
                require('../assets/foods/1.jpg'),
                require('../assets/foods/2.jpg'),
                require('../assets/foods/3.jpg'),
                require('../assets/foods/4.jpg'),
                require('../assets/foods/5.jpg'),
                require('../assets/foods/6.jpg'),
                require('../assets/foods/7.jpg'),
                require('../assets/foods/8.jpg'),
                require('../assets/foods/9.jpg'),
            ]
        })
    }
</script>
