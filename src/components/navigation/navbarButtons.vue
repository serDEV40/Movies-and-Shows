<script setup>
    import { ref } from 'vue';

    const items = ref(['Home', 'Movies & Shows', 'Support', 'Subscriptions']);
</script>

<template>
    <div class="w-100">
        <div class="collapse navbar-collapse">
            <div class="w-100 row">
                <ul class="navbar-nav mx-auto card bg-danger justify-content-center w-auto">
                    <li class="nav-item btn-group m-1" v-for="i of items">
                        <a href="" class="btn btn-dark text-light">
                            {{ i }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .btn-dark{
        background-color: #1a1a1a !important;
        border: solid 1px #1a1a1a !important;
        border-radius: 8px !important;
    }

    .card{
        border-radius: 8px !important;
        border: solid 3px #1F1F1F !important;
    }
</style>