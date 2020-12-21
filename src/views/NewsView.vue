<template>
  <div>
    <div v-bind:key="item" v-for="item in this.$store.state.news">{{ item.title }}</div>
  </div>
</template>

<script>

export default {
  name: "NewsView",
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>