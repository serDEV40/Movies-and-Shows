<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        item: {
            type: Object,
            default: null
        }
    });
</script>

<template>
    <div class="card col-md-2 p-0 rounded-0 outline-none bg-transparent border-none">
        <div class="card-header text-light">
            {{ item.title }}
        </div>
        <div class="card-body border-none">
            <ul class="list-group">
                <li class="list-group-item p-0 py-2 bg-transparent border-0 outline-none" v-for="init of item.options">
                    <span class="card-text text-secondary">
                        {{ init }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>