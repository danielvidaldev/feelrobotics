import { defineStore } from 'pinia';
import { onMounted, ref, watch } from 'vue';

export const mainStore = defineStore('main', () => {
  const shows = ref([]);
  const genres = ref([]);
  const showsByGenres = ref({});
  const searchValue = ref('');
  const searchResponse = ref([]);
  const showModal = ref(false);
  const activeShow =  ref({});

  const fetchShows = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      shows.value = data;
      extractGenres();
    } catch (error) {
      console.error(error);
    }
  };

  const extractGenres = () => {
    const allGenres = new Set();
    shows.value.forEach((show) => {
      show.genres.forEach((genre) => {
        allGenres.add(genre);
      });
    });
    genres.value = Array.from(allGenres);
    divideShowsByGenres();
  };

  const divideShowsByGenres = () => {
    genres.value.forEach((genre) => {
      const showsForGenre = shows.value.filter((show) => show.genres.includes(genre));
      showsForGenre.sort((a, b) => b.rating.average - a.rating.average);
      showsByGenres.value[genre] = showsForGenre;
    });
  };

  const searchShows = async () => {
    try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchValue.value}`
        );
        const data = await response.json();
        searchResponse.value = data;
    } 
    catch (error) {
        console.error(error);
    }
  };

  const clearSearch = () => {
    searchValue.value = '';
    searchResponse.value = [];
  }

  const triggerModal = (show) => {
    showModal.value = !showModal.value;
    activeShow.value = show;
  }

  onMounted(() => {
    fetchShows();
  });

  watch(searchValue, () => {
    searchShows();
  });



  return {
    shows,
    showsByGenres,
    searchValue,
    searchResponse,
    clearSearch,
    showModal,
    triggerModal,
    activeShow
  };
});
