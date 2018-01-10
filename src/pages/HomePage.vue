<template>
  <main>
    <!-- <my-header @searchSubmitted="submitSearch"></my-header> -->
    <deal-list></deal-list>
    <!-- <my-footer></my-footer> -->
  </main>
</template>
<script>
import MyHeader from '../components/MyHeader';
import DealList from '../components/DealList';
import MyFooter from '../components/MyFooter';

import { LOAD_DEALS, SET_SEARCHED_TERM } from '../modules/DealModule.js'
// import { SET_USER } from '../modules/UserModule.js'

export default {
  created() {
    // console.log('Home Page created')
    // console.log ('this.$store: ', this.$store)
    this.$store.dispatch({ type: LOAD_DEALS })
    // this.$store.commit({ type: SET_USER })

  },
  // methods: {
  //   submitSearch(term) {
  //     // console.log('submitSearch of: ', term)
  //     this.$store.commit({ type: SET_SEARCHED_TERM, term })
  //   }
  // },
  components: {
    MyHeader,
    DealList,
    MyFooter,
  }
}
</script>
