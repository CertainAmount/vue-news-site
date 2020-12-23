<template>
  <div>
    <p v-bind:key="item" v-for="item in fetchedNews">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by <router-link :to="'/user/'+item.user">{{ item.user }}</router-link>
      </small>
    </p>
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

</style>