<template>
    <input type="text" id="search-input" placeholder="Search" v-model="search" @keyup="handleSearch">
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        search: ''
      }
    },
    methods: {
        handleSearch() {
          this.$store.commit('setSearchQuery', this.search)
        }

    }
  }
</script>

<style lang="sass" scoped>
    input
        background-color: hsla(0,0%,100%,.125)
        width: 300px
        border-radius: 3px
        padding: 6px 8px
        margin-left: 20px
        border-color: transparent
        outline: none
        color: #fff
        &:focus
            background-color: #fff
            color: #000

</style>