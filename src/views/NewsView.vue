<template>
  <div>
    <div v-bind:key="user" v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api/index';

export default {
  name: "NewsView",
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
        .then(response =>
            this.users = response.data)
        .catch(err =>
            console.log(err))
  }
}
</script>

<style scoped>

</style>