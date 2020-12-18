<template>
  <div>
    <div v-bind:key="user" v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "NewsView",
  data() {
    return {
      users: []
    }
  },
  created() {
    let vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(response =>
        vm.users = response.data)
    .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>