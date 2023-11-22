<script setup>
    import { RouterView } from "vue-router"
    import Trial from './components/trial/Trial.vue';
    import Foot from './components/footer/Footer.vue';
    import Navbar from './components/navigation/Navbar.vue';
</script>

<template>
    <Navbar />
    <RouterView/>
    <Trial />
    <Foot />
</template>