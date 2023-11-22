<script setup>
    import { fetchMovies } from '../../api';
    import cardTitle from './title.vue';
    import { onMounted, ref } from 'vue';
    import redButton from './button.vue';
    import explanation from './explanation.vue';

    const images = ref(new Array());
    
    onMounted(async ()=>{
        const items = await fetchMovies().then((Response)=>{return Response});

        for(let index = 0; index < items.results.length ; index++){
            const baseDate = items.results[index];
            const urlLink = `https://image.tmdb.org/t/p/w780/${baseDate.backdrop_path}`;

            images.value.push(urlLink)
        }

    });
</script>

<template>
    <div class="w-100 bg-black">
        <div class="container">
            <div class="row h-100 align-items-center">
                <div class="texts col-md-10">
                    <card-title />
                    <explanation />
                </div>
                <div class="button col-md-2">
                    <red-button />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        height: 250px;
        background: linear-gradient(90deg, #0F0F0F 2.42%, rgba(20, 15, 15, 0.97) 25.46%, rgba(34, 14, 14, 0.91) 46.72%, rgba(229, 0, 0, 0.00) 168.98%);
        border-radius: 8px;
    }
</style>