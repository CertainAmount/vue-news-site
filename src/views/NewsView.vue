<template>
  <div>
    <ul class="new-list">
        <li class="post" v-bind:key="item" v-for="item in fetchedNews">
          <div class="points">
            {{ item.points }}
          </div>
          <div>
            <p class="news-title">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </p>
            <small class="link-text">
              {{ item.time_ago }} by
              <router-link class="link-text" :to="'/user/'+item.user">{{ item.user }}</router-link>
            </small>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "NewsView",
  computed: {
    ...mapGetters({
      fetchedNews: 'fetchedNews'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>
.new-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  height: 60px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>