<template>
  <div>
      <b-form @submit.prevent="onSearch">
          <b-form-input class="border-black"
            v-model="keyword" placeholder="책제목을 입력하세요"
          > </b-form-input>
      </b-form>

      <!-- <b-form>
        <b-form-input class="border-black"
          v-model="search" placeholder="책제목을 입력하세요"
        > </b-form-input>
      </b-form> -->


      <!-- <div class="wrapper">
        <div class="card" v-for="post in filteredList" v-bind:key="post.author">
          <a v-bind:href="post.link" target="_blank">
            <img v-bind:src="post.img"/>
            <small>posted by: {{ post.author }}</small>
            {{ post.title }}
          </a>
        </div>
      </div> -->
      <BookText v-if="searchList" :text="'Search Result'"></BookText>
      <BookLists :bookList="searchList"></BookLists>
  </div>
</template>

<script>

class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}
import BookLists from "../components/BookLists";
import BookText from "../components/BookText";
import { movieApi } from "../utils/axios";
import { mapMutations } from "vuex";
export default {
    components: {
        BookText,
        BookLists
    },
    data() {
        return{
            keyword: "",
            searchList: "",

            search: '',
            postList : [new Post(
              'Vue.js',
              'https://vuejs.org/',
              'Chris',
              'https://vuejs.org//images/logo.png'
            ),
            new Post(
              'React.js',
              'https://facebook.github.io/react/',
              'Tim',
              'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
            ),
            new Post(
              'Angular.js',
              'https://angularjs.org/',
              'Sam',
              'https://angularjs.org/img/ng-logo.png'
            )]
        }
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    mounted() {
        this.SET_LOADING(false);
    },
    methods: {
        ...mapMutations(["SET_LOADING"]),
        async onSearch() {
            this.SET_LOADING(true);
            if(!this.keyword) {
                alert("책 제목을 입력하세요");
                return;
            }

            const {data} = await movieApi.search(this.keyword);
            this.searchList = data.results;
            this.SET_LOADING(false);
        }
    }
}
</script>

<style>

</style>
