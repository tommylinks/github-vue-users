<template>
    <div class="detail" v-if="user">
        <div class="flex-wrap">
            <div class="detail-user">
                <img :src="user.avatar_url" class="detail-user__avatar" alt="avatar">
                <h2>{{ user.name }}</h2>
                <span class="detail-user__login">{{ user.login }}</span>
                <div class="detail-user__blog" v-if="user.blog">Blog: <a :href="user.blog">{{ user.blog }}</a></div>
            </div>
            <div class="detail-follow">
                <p>Followers: {{ user.followers }} </p>
                <p>Following: {{ user.following }} </p>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        user: null
      }
    },
    async mounted() {
      const login = await this.$route.params.login
      this.user = await this.$store.dispatch('getUserByLogin', login)

      this.$store.dispatch('addUserToLocalStorage', this.user)

    }
  }
</script>

<style lang="sass">
    .detail
        .flex-wrap
            display: flex
        .detail-user
            width: 300px
            .detail-user__avatar
                width: 100%
                height: 300px
                object-fit: cover
            h2
                margin-bottom: 0
            .detail-user__login
                color: #8f8f8f
                font-size: 20px
            .detail-user__blog
                margin-top: 30px
                font-size: 20px
        .detail-follow
            margin-left: 20px
            p
                font-size: 20px

</style>