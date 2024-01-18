<template>
    <div class="border-b-2 last:border-b-0 border-gray-500 pb-10">
        <p class="font-semibold text-lg mb-4">{{ genreName }}</p>
        <Carousel :breakpoints="breakpoints" :snapAlign="'start'">
            <Slide v-for="show in genre" :key="show.id" class="p-1 !mb-auto" @click.prevent="main.triggerModal(show)">
                <div class="carousel__item">
                    <ShowItem :image="show.image?.medium ? show.image?.medium : show.image?.original" :name="show.name" :rating="show.rating.average"/>
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script setup>
    const main = mainStore()

    const props = defineProps({
        genreName: {
            type: String
        },
        genre:  {
            type: Object
        }
    })

    const breakpoints = {
        0: {
            itemsToShow: 1.5,
        },
        550: {
            itemsToShow: 2.5,
        },
        768: {
            itemsToShow: 3.5,
        },
        1024: {
            itemsToShow: 4,
        },
    }
    
</script>


<style>
    .carousel__prev,
    .carousel__next {
        margin: 0px 0px;
        display: none;
    }

    @media (min-width: 1024px) {
        .carousel__prev,
        .carousel__next {
            display: block;
        }
    }
</style>