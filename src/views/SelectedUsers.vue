<template>
    <div class="user-list">
        <div class="user-list__topbar">
            <div class="remove-btn" @click="removeAllUsers()">Delete all</div>
        </div>
        <ul v-if="users && users.length">
            <li class="user-list__item" v-for="user of filteredList" :key="user.id">
                <div class="flex-wrap">
                    <router-link :to="`/user/${user.login}`">
                        <img :src="user.avatar_url" alt="avatar">
                    </router-link>
                    <h3><router-link :to="`/user/${user.login}`">{{ user.login }}</router-link></h3>
                </div>
                <i class="i-delete" @click="removeUserById(user.id)">delete</i>
            </li>
        </ul>
        <div class="user-list__empty" v-else>
            There are no selected users.
        </div>
        <div class="user-list__empty" v-if="!filteredList.length">
            No results
        </div>
    </div>
</template>

<script>
  export default {
    name: "SelectedUsers",
    data() {
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
    methods: {
      async removeUserById(id) {
        this.users = await this.$store.dispatch('removeUserById', id)
      },
      async removeAllUsers() {
        this.users = await this.$store.dispatch('removeAllUsers')
      }
    },
    mounted() {
      this.users = JSON.parse(localStorage.getItem('users')).reverse() || []
    }
  }
</script>

<style lang="sass">
    .user-list__topbar
        display: flex
        justify-content: flex-end
        border-bottom: 1px solid #2e2e2e
        padding-bottom: 20px
        .remove-btn
            display: inline-block
            text-align: right
            padding: 5px
            border: 1px solid #2e2e2e
            border-radius: 3px
            cursor: pointer
    .user-list__empty
        padding: 20px
        text-align: center
    .i-delete
        cursor: pointer
</style>