<template>
    <div v-if="deal">
        <h2 v-if="deal">{{deal.name}} </h2>
        <div class="img-and-txt">
            <div class="deal-img">
                <img :src="deal.imgUrl" alt="" />
            </div>
            <div class="deal-p">
                <p>{{deal.desc}}</p>
            </div>
        </div>
        <h2 v-if="deal">Only {{deal.price}}$ !</h2>
        <button @click="buy">Buy Now</button>
    </div>
</template>

<script>
import { SET_CURR_DEAL } from '../modules/DealModule.js';
import swal from 'sweetalert';

export default {
    computed: {
        deal() {
            return this.$store.getters.currDeal;
        }
    },
    methods:{
        buy(){
            swal("Good job!", "You clicked the button!", "success");
        }
    },
    created() {
        // console.log('this.$route.params.dealId: ', this.$route.params.dealId)
        var dealId = this.$route.params.dealId
        this.$store.dispatch({ type: SET_CURR_DEAL, dealId })
    },
}
</script>
<style scoped>
.img-and-txt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.deal-p {
    max-width: 40%;
    padding: 0 20px;
    background: var(--colorB);
    color: var(--colorA);
}
p {
    margin: 0;
}
.deal-img {
    margin-left: 10px; 
}
img {
    max-width: 100%;
}

@media (max-width: 700px) {
    .img-and-txt {
        flex-direction: column;
    }
    .deal-p {
        margin: auto;
        max-width: 80%;
    }
    .deal-img {
    margin-right: 10px; 
}
}
</style>

