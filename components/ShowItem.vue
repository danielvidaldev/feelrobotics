<template>
    <div>
        <img v-if="image" :src="image" :alt="name" class="mx-auto" />
        <div class="mt-3 text-center">
            <p class="font-bold line-clamp-1">{{ name }}</p>
            <p v-if="rating" class="mt-1">Rating: {{ rating }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        image: {
            type: String
        },
        name:  {
            type: String
        },
        rating: {
            type: Number
        }
    })
</script>