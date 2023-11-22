<script setup>
    import { ref } from 'vue';
    import navigation from "./navigaton.vue";

    const setProps = ref([{
            "title": "Home",
            "options": ["Categories", "Devices", "Pricing", "FAQ"]
        },{
            "title": "Movies",
            "options": ["Gernes", "Trending", "New Release", "Popular"]
        },{
            "title": "Shows",
            "options": ["Gernes", "Trending", "New Release", "Popular"]
        },{
            "title": "Support",
            "options": ["Contact Us"]
        },{
            "title": "Subscription",
            "options": ["Plans", "Features"]
        }
    ]);
</script>

<template>
    <footer class="w-100 bg-black">
        <div class="container py-5">
            <div class="row">
                <navigation v-for="prop, index in setProps" :key="prop.title + '-' + index" :item="prop"/>
            </div>
            <hr class="text-secondary">
            <div class="row">
                <span class="text-secondary">
                    @2023 - 2024 MovieToo All Rights Reserved
                </span>
            </div>
        </div>
    </footer>
</template>