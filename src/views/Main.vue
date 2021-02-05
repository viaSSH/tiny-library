<template>
  <div>

    <!-- <BookLists :bookList="nowHaving"> </BookLists> -->
    <div class="d-flex flex-wrap" v-if="nowHaving">
      <BookText :text="'Now Having'"></BookText>
      <BookLists :bookList="nowHaving"> </BookLists>
    </div>
    <!-- <div class="d-flex flex-wrap" v-if="nowPlaying"> -->
        <!-- <div class="h4 ml-3 mt-5 mb-4 text-white">Now Playing</div> -->
        <!-- <MovieText :text="'Now Playing'"></MovieText>
        <MovieLists :movieList="nowPlaying"> </MovieLists>

        <MovieText :text="'Popular'"></MovieText>
        <MovieLists :movieList="popular"> </MovieLists>

        <MovieText :text="'Coming Soon'"></MovieText>
        <MovieLists :movieList="upComing"> </MovieLists>
    </div> -->
  </div>
</template>


<script>
import { movieApi } from "../utils/axios";
import BookLists from '../components/BookLists';
import BookText from '../components/BookText';
// import MovieLists from "../components/MovieLists";
// import MovieText from "../components/MovieText";
import { mapMutations } from 'vuex';
export default {
    components: {
      BookLists,
      BookText
        // MovieLists,
        // MovieText
    },
  data() {
    return {
      nowHaving: [],
      nowPlaying: [],
      popular: [],
      upComing: []
    };
  },
  created() {
      this.SET_LOADING(true);
  },
  async mounted() {
    try {
        // const {nowPlaying, popular, upComing} = movieApi;
        // const requestArr = [nowPlaying, popular, upComing];
        // const[now, pop, up] = await Promise.all(
        //     requestArr.map(li => li().then((res) => res.data.results))
        // );
        this.SET_LOADING(false);
        // this.nowPlaying = now;
        // this.popular = pop;
        // this.upComing = up;
        // console.log("gogo");
        // console.log(this.nowPlaying);

        const {nowHaving} = movieApi;
        const requestArr = [nowHaving];
        console.log(requestArr);
        const [now] = await Promise.all(
            requestArr.map(li => li().then((res) => res.data.results))
        );
        this.nowHaving = now;
        console.log(this.nowHaving);

    } catch(error) {
        alert("데이터가 존재하지 않습니다.");
    }
  },
  methods: {
    ...mapMutations(["SET_LOADING"])
  },
};
</script>


<style>
.movie-card {
    margin: 12px;
    width: 125px;
    font-size: 12px;
    font-weight: 400;
}
.movie-card:hover {
    opacity: 0.5;
    cursor: pointer;
}
.movie-title{
    color: #ffffff;
}
.movie-card img {
    height: 180px;
    border-radius: 8px;
}
.movie-information {
    margin-top: 7px;
}
.movie-date {
    font-size: 10px;
    margin-top: 5px;
    color: #cccccc;
}
</style>
