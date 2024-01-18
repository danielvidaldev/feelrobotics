<template>
    <TransitionRoot appear :show="main.showModal" as="template">
      <Dialog as="div" @close="main.triggerModal" class="relative z-10 ">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25 h-screen" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div
            class="flex items-center justify-center lg:p-4 text-center max-h-[95vh] h-full"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full relative lg:max-w-7xl transform max-h-full overflow-hidden lg:rounded-2xl bg-white p-4 lg:p-6 text-left align-middle transition-all"
                @keyup.enter="main.triggerModal"
              >
                <span class="absolute top-4 right-4 cursor-pointer h-6 w-6" @click="main.triggerModal"> &#x2715; </span>
                <div class="flex gap-4 lg:gap-8 h-full max-h-[85vh] overflow-hidden">
                    <img v-if="main.activeShow.image" class="w-1/2 max-h-full" :src="main.activeShow.image?.original" :alt="main.activeShow.name"  />
                    <div class="text-sm lg:text-base">
                        <div class="flex space-x-3 items-center">
                            <p class="text-xl font-bold">{{ main.activeShow.name }}</p>
                            <p class="text-xl font-bold text-yellow-500"> &#9733; {{ main.activeShow.rating?.average }}</p>
                        </div>
                        <div class="flex space-x-3 mt-2 md:mt-3">
                            <p v-for="(genre, index) in main.activeShow?.genres" :key="index" class="font-semibold"> {{ genre }}</p>
                        </div>
                        <p v-html="main.activeShow.summary" class="mt-3 md:mt-5 mb-2 md:mb-3 line-clamp-6 md:line-clamp-none"></p>
                        <a :href="main.activeShow.network?.officialSite" aria-label="Official site" class="underline">Official site</a>
                        <p class="mt-2 md:mt-3"> Producer: {{ main.activeShow.network?.name }}</p>
                        <p class="mt-2 md:mt-3"> Country: {{ main.activeShow.network?.country?.name }} - Original language: {{ main.activeShow?.language }}</p>
                        <p class="mt-2 md:mt-3"> Ended on: {{ main.activeShow?.ended }}</p>
                    </div>
                </div>
                
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
<script setup>
    const main = mainStore()

    import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'

</script>