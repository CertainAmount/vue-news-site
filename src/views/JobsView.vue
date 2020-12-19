<template>
<div>
  <div v-bind:key="job" v-for="job in jobs">{{ job.title }}</div>
</div>
</template>

<script>
import {fetchJobsList} from '@/api/index'

export default {
  name: "JobsView",
  data () {
    return {
      jobs: [],
    }
  },
  created() {
    fetchJobsList()
        .then(response=>
            this.jobs=response.data)
        .catch(error=>
            console.log(error))
  }
}
</script>

<style scoped>

</style>