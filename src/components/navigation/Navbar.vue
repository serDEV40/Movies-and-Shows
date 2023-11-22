<script setup>
    import navbarLogo from './navbarLogo.vue';
    import navbarButtons from './navbarButtons.vue';
    import navbarNotfs from './navbarNotfs.vue';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100">
        <div class="container">
            <navbar-logo />
            <navbar-buttons />
            <navbar-notfs />
        </div>
    </nav>
</template>