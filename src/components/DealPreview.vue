<template>
  <div class="deal-container">
    <div class="img-and-txt">
      <div class="deal-img">
        <img :src="deal.imgUrl" alt="" />
        <!-- <img src="../assets/deals/1.jpg" alt=""/> -->
      </div>
      <div class="card">
        <div>{{card.name}}</div>
      </div>
    </div>
    <div class="deal-txt">
      {{deal.name}} {{deal.price}}$
    </div>

    <router-link :to="'/dealinfo/' + deal._id">
      <button>
        Details
      </button>
    </router-link>
  </div>
</template>

<script>
import CardServ from '../services/CardServ.js'

export default {
  props: ['deal'],
  data() {
    return {
      card: null
    }
  },
  created() {
    // console.log('card id is: ', this.deal.cardId)
    var cardId = this.deal.cardId
    this.card = CardServ.cards.find(card => cardId === card.id)
    // console.log('this.card', this.card.id)
  },
  methods: {
    deleteDeal(dealId) {

    }
  }
}
</script>

<style scoped>
.deal-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  font-weight: bold;
}

.img-and-txt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
}

.deal-txt {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  font-size: 0.8em;
}

.deal-img {
  text-align: left;
  width: 40%;
}

img {
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40%;
  font-size: 0.6em;
}

div>p {
  /* font-size: 0.9em; */
  overflow: hidden;
}

button {
  width: 100%
}
</style>


