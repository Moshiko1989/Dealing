<template>
  <div class="flex-container">
    <!-- <h1>My Header conect</h1> -->
    <router-link class="logo" to="/">Dealing</router-link>
    <!-- <div class="logo">Dealen</div> -->

    <div>

      <div class="user-container" v-if="user.name">
        <p>
          Hello {{user.name}}
        </p>
        <button @click="clearUser">Not You?</button>
      </div>

      <form @submit.prevent="emitSearch">
        <input type="text" v-model="term" placeholder="Search for a Deal">
        <button class="go">Go!</button>
      </form>

    </div>

    <div class="my-nav">
      <my-nav></my-nav>
    </div>
    <div class="my-menu" >
      <menu-mini @menuClicked="moveMenu" class="menu-mini"></menu-mini>
    </div>
    <!-- <i class="fa fa-bars hamburger" aria-hidden="true"></i> -->
  </div>
</template>

<script>
import MyNav from './MyNav'
import MenuMini from '../components/MenuMini'
import { CLEAR_USER } from '../modules/UserModule.js'



export default {
  data() {
    return {
      term: ''
    }
  },
  methods: {
    emitSearch() {
      // console.log('searching for: ', this.term)
      this.$emit('searchSubmitted', this.term)
    },
    clearUser() {
      localStorage.clear()
      this.$store.commit({ type: CLEAR_USER })
      this.$router.push('/profile')
    },
    moveMenu() {
      
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  components: {
    MyNav,
    MenuMini,
  }
}
</script>


<style scoped>
.logo {
  /* width: 164px; */
  text-align: left;
  color: var(--colorC);
  margin: auto;
}

.flex-container {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

.flex-container>* {
  width: 33.3333%
}

.user-container {
  padding-bottom: 3px;
}

.user-container p {
  display: inline;
}

form {
  margin: 6px;
}

.go {
  margin-left: 3px;
}

hamburger {
  display: none;
}

.my-menu {
  display: none;
}

@media (max-width: 700px) {
  .flex-container {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  .my-nav {
    display: none;
  }
  .my-menu {
    display: block;
  }
  .my-menu > * {
    position: absolute;
    top: 20px;
    left: 70vw;
    /* background-color: rgb(118, 186, 187);; */
  }
  hamburger {
    display: flex;
    width: 20%;
  }
  .logo {
    width: 20%;
    margin: 0;
  }
  form {
    display: flex;
  }
}
</style>

