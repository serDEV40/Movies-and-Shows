<script setup>
    import { library } from '@fortawesome/fontawesome-svg-core'; 
    import { faTicket } from '@fortawesome/free-solid-svg-icons';

    library.add(faTicket)
</script>

<template>
    <a class="navbar-brand d-flex align-items-center" href="/#">
        <div class="me-2">
            <font-awesome-icon size="2x" icon="fa-solid fa-ticket"/>
        </div>
        <div class="ms-1">
            MovieToo
        </div>
    </a>
</template>