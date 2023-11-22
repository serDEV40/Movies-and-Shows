<script setup>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

    library.add(faBell, faMagnifyingGlass);
</script>

<template>
    <div class="form-inline my-2 my-lg-0 d-flex align-items-center">
        <button class="btn my-2 my-sm-0 col-md-6 ms-2">
            <font-awesome-icon size="2x" icon="fa-solid fa-magnifying-glass"/>
        </button>
        <button class="btn my-2 my-sm-0 col-md-6 ms-2">
            <font-awesome-icon size="2x" icon="fa-solid fa-bell" />
        </button>
    </div>
</template>