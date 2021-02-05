<template>
  <div v-if="bookList" class="d-flex flex-wrap">
    <div v-for="li in bookList" class="movie-card" :key="li.id" style="width:250px;

        ">
      <!-- {{li}} -->
      <div @click="goDetail(li.id)">
        <b-img
          v-if="li.image_path"
          :src="image(li.image_path)"
          fluid
          style="width:250px; height:360px;"
        ></b-img>
        <b-img v-else :src="noImage" fluid style="width:250px; height:360px;"></b-img>
        <div class="movie-information">
          <div class="movie-title">{{li.title}}</div>
          <!-- <div class="movie-date" v-if="li.release_date">{{ li.release_date.split("-")[0] }}</div> -->
          <div class="movie-date" v-if="li.overview">{{ li.overview }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookList"],
  data() {
    return {
      noImage: require("../assets/error.jpg"),
    };
  },
  methods: {
    image(img) {
      // return `https://image.tmdb.org/t/p/w300/${img}`;
      return img;
    },
    goDetail(id) {
      this.$router.push(`detail/${id}`)
    }
  },
};
</script>

<style>
</style>
