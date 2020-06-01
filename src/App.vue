<template>
  <div id="app">
      <header id="header">
          <router-link to="/">
              <h3>GitHub users</h3>
          </router-link>
          <search></search>
      </header>
      <aside id="sidebar">
          <router-link to="/">Пользователи</router-link>
          <router-link to="/selected">Выбранные пользователи</router-link>
      </aside>
      <div id="content">
          <router-view/>
      </div>
      <footer id="footer">Footer</footer>
  </div>
</template>

<script>
    import Search from "@/components/Search"
    export default {
      components: {
        Search
      }
    }

</script>

<style lang="sass">
body
    margin: 0

ul
    margin: 0
    padding: 0
    li
        list-style-type: none

a
    text-decoration: none

#app
    display: grid
    grid-template-areas: "header header" "aside content" "footer footer"
    grid-template-rows: 60px 1fr 60px
    grid-template-columns: 20% 1fr
    height: 100vh
    margin: 0
    background-color: #fff
    font-family: "Segoe UI", "Roboto", sans-serif
    color: #2e2e2e

header, footer, #content, #sidebar
    padding: 20px

#header
    grid-area: header
    display: flex
    align-items: center
    background-color: #24292e
    color: #fff
    h3
        margin: 0
        color: #fff

#footer
    grid-area: footer
    border-top: 1px solid #e1e1e1
    text-align: center

#content
    grid-area: content
    background-color: #f6f8fa

#sidebar
    grid-area: aside

    a
        display: block
        padding: 20px 8px
        border-bottom: 1px solid #e1e1e1
        text-transform: uppercase
        color: #2e2e2e
        transition: background-color .3s
        &:last-child
            border: none
        &:hover, &.router-link-exact-active
            background-color: #f6f8fa


</style>
