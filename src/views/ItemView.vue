<template>
<div>
  <p>{{ fetchItem.title }}</p>
  <div>{{ fetchItem.content }}</div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ItemView",
  computed: {
    ...mapGetters({
      fetchItem: 'fetchedItem'
    })
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>

</style>