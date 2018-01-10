<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <my-header @searchSubmitted="submitSearch"></my-header>
      <router-view/>
    </div>
    <my-footer class="footer"></my-footer>
  </div>
</template>

<script>
import { LOAD_DEALS, SET_SEARCHED_TERM } from './modules/DealModule.js'
import StorageServ from './services/StorageServ.js'



import MyHeader from './components/MyHeader'
// import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'


export default {
  name: 'app',
  methods: {
    submitSearch(term) {
      // console.log('submitSearch of: ', term)
      this.$store.commit({ type: SET_SEARCHED_TERM, term })
      this.$router.push('/');
    }
  },
  created() {

  },

  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colorB);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer {
  margin-top: 3px;
}
</style>





