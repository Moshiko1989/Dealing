<template>
  <main>
    <div class="filter-container">
      <p>Filter By:</p>
      <label>
        <input class="checkbox" type="checkbox" @change="cardsChecked" :checked="isCards" /> All / User Cards
      </label>
    </div>
    {{deals.length}}
    <div class="deals-container">
      <deal-preview class="deal" v-for="(deal) in deals" :deal="deal" :key="deal.name"></deal-preview>
    </div>

  </main>
</template>

<script>
import DealPreview from '../components/DealPreview';
import { SET_FILTERED_BY, TOGGEL_ALL, SET_ALL } from '../modules/DealModule.js'

export default {
  data() {
    return {
      isCards: true,
      // deals: []
    }
  },
  methods: {
    cardsChecked() {
      this.isCards = !this.isCards;
    },
    getDeals() {
      this.$store.commit({ type: TOGGEL_ALL, isShow: this.isCards })
      // this.deals = this.$store.getters.deals;
    }
  },
  watch: {
    isCards() {
      this.getDeals()
    }
  },
  computed: {
    deals() {
      return this.$store.getters.deals;
    }
  },
  created() {
    this.getDeals();
  },
  components: {
    DealPreview
  }
}
</script> 

<style scoped>
.deals-container {
  width: 90vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.checkbox {

}

.deal {
  border: 1px solid black;
  margin: 1px;
  /* flex-grow: 1; */
  width: 25%;
  background: var(--colorB);
  color: var(--colorA);
  /* max-height: 12.5vh; */
  justify-content: center;
}

.deal:last-child {
  /* flex-grow:0; */
}

@media (max-width: 700px) {
  .deals-container {
    flex-direction: column;
  }
  .deal {
    border-bottom: none;
    margin: 1px auto;
    width: 70vw;
  }
  .deal:last-child {
    border: 1px solid black;
  }
}






/* .filter-container > {
  display: inline;
} */


/* .filter-container {
  display: flex;
  flex-direction: row;
} */
</style>



