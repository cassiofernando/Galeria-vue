<template>
  <div class="Home">
    <div class="container">
        <ul class="row">
          <li v-for="album in albums" class="col-2">
            <a :href="'/album/'+album.id ">  
              Album {{ album.id }}
          </a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home', 
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      albums: [],
      photos: [],
    };
  },
  created () {
    this.getAlbums()
    this.getPhotos()
  },
   methods: {
    getAlbums() {
    var res = this
    axios.get('http://jsonplaceholder.typicode.com/albums')
      .then(function (response) {
        res.albums = response.data;
      })
    },
  },
};
</script>
<style scoped>

ul {
  list-style-type: none;
}
li {
  margin: 10px;
  background:rgb(22, 19, 19);
  padding: 10px;
  
}
a {
  color: #a2afa9;
  display: block
}

</style>
