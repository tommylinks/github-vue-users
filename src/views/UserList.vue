<template>
  <div class="user-list">
    <ul v-if="users && users.length">
        <li class="user-list__item" v-for="user of filteredList" :key="user.id">
            <div class="flex-wrap">
                <router-link :to="`/user/${user.login}`">
                    <img :src="user.avatar_url" alt="avatar">
                </router-link>
                <h3><router-link :to="`/user/${user.login}`">{{ user.login }}</router-link></h3>
            </div>
        </li>
    </ul>
    <div v-if="!filteredList.length" >
        No results
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
            users: []
        }
      },
      computed: {
        filteredList() {
          return this.users.filter(user => {
            return user.login.toLowerCase().includes(this.$store.state.searchQuery.toLowerCase())
          })
        }
      },
      async mounted() {
        this.users = await this.$store.dispatch('getAllUsers')
      }
    }
</script>

<style lang="sass">
    .user-list
        .flex-wrap
            display: flex
            align-items: center
        .user-list__item
            img
                width: 40px
                height: 40px
                object-fit: cover
                border-radius: 3px
                margin-right: 20px
            a
                color: #24292e
                &:hover
                    color: #0366d6

        li
            display: flex
            justify-content: space-between
            align-items: center
            border-bottom: 1px solid #e1e1e1
            &:last-child
                border-bottom: none

</style>
