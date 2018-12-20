<template>
  <div class="photos">
       <div v-if="loading">Carregando...</div>
  <img class="image" v-for="(photo, i) in photos" :src="photo.thumbnailUrl" @click="onClick(i)">
  <vue-gallery-slideshow :images="urls" :index="index" @close="index = null"></vue-gallery-slideshow>
  </div>    
</template>

<script>
import axios from 'axios';
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: 'photos', 
      components: {
      VueGallerySlideshow
    },
    
  data() {
    return {
      photos: [],
      urls:[],
      loading: true,
      id: this.$route.params.id,
      index: null
    };
  },
  created() {
    this.getPhotos();
  },
    methods: {
    getPhotos() {
      let photosUrl = 'http://jsonplaceholder.typicode.com/photos?albumId='+this.id;
      axios.get(photosUrl)
        .then((response) => {
          this.photos = response.data;
            for(let i = 0; i < this.photos.length; i++) {
            this.urls.push(response.data[i].url);
        }
        }).catch(error => console.log(error))
        .finally(() => this.loading = false)      
    },
    onClick(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>