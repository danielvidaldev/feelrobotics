<template>
    <div class="border border-gray-500 rounded-2xl bg-white p-5 w-full">
        <template v-if="!main.searchValue">
            <GenreCarousel class="mb-10 last:mb-0" v-for="(genre, genreName) in main.showsByGenres" :key="genreName" :genreName="genreName" :genre="genre" />
        </template>
        <template v-if="main.searchValue">
            <button class="uppercase font-semibold rounded-xl p-2 border boder-gray-500 mb-8 hover:opacity-70" @click.prevent="main.clearSearch"> &#x2190; Back to dashboard</button>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                <ShowItem v-for="(show, showName) in main.searchResponse" :key="showName" :image="show.show.image?.medium ? show.show.image?.medium : show.show.image?.original" :name="show.show.name" :rating="show.show.rating.average" @click.prevent="main.triggerModal(show.show)"/>
            </div>
        </template>
        <ShowModal v-if="main.showModal"/>
    </div>
</template>

<script setup>
  const main = mainStore()

</script>