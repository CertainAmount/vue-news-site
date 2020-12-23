<template>
  <div>
    <p v-bind:key="item" v-for="item in fetchedAsk">
      <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "AskView",
  computed: {
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>