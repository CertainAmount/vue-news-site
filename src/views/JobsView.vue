<template>
<div>
  <p v-bind:key="job" v-for="job in fetchedJobs">
    <a :href="job.url">{{job.title}}</a>
    <small> {{job.time_ago }}, {{ job.domain }} </small>
  </p>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "JobsView",
  computed: {
    ...mapGetters({
      fetchedJobs: 'fetchedJobs',
    })
  }
}
</script>

<style scoped>

</style>