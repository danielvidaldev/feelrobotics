<template>
    <div class="border border-gray-500 rounded-2xl bg-white p-5">
      <h1 class="uppercase text-4xl font-bold text-center">Movie searcher</h1>
      <input type="text" placeholder="Search by movie title" v-model="main.searchValue" class="mt-5 mb-2 w-full focus:outline-gray-600 border boder-gray-600 rounded-2xl px-4"/>
    </div>
</template>

<script setup>
  const main = mainStore()

</script>