<script setup>
    import { ref } from 'vue';

    const plans = ref([{
        'title': "Basic Plan",
        'description': "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        'price': 9.99
    },{
        'title': "Standart Plan",
        'description': "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        'price': 12.99
    },{
        'title': "Premium Plan",
        'description': "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        'price': 14.99
    }]);
</script>

<template>
    <main class="w-100 bg-black">
        <div class="container">
            <div class="box py-5">
                <div class="row my-3 mx-1">
                    <div class="title mb-3">
                        <span class="h2 text-white">
                            Choose the plan that's right for you
                        </span>
                    </div>
                    <div class="text mb-3">
                        <span class="text-secondary">
                            Join MovieToo and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                        </span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="card p-4 m-2 outline-none bg-transparent" v-for="index, init of plans" 
                        :key="'plan-' + init">
                        <div class="card-header border-bottom-0 text-white">
                            <h3 class="card-title">
                                {{ index.title }}
                            </h3>
                        </div>
                        <div class="card-body">
                            <span class="card-text text-secondary">
                                {{ index.description }}
                            </span>
                        </div>
                        <div class="card-body text-light">
                            <span class="h2">
                                {{ index.price }} $ / Month
                            </span>
                            <div class="row gap-1 align-items-center justify-content-between mt-3">
                                <button class="col-md-5 p-2 btn text-light ms-3" 
                                    style="background-color: #141414; border: solid 1px #262626;">
                                    Start Free Trial
                                </button>
                                <button class="col-md-5 p-2 btn text-light" style="background-color: #e50000;">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .card{
        border: solid 1px #262626;
        background-color: #1a1a1a;
    }
</style>