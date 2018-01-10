<template>
    <div class="profile-container">
        <!-- <my-nav></my-nav> -->
        <!-- <my-header></my-header> -->
        <h1>{{user.name}}</h1>
        <div class="input-name-container">
            <input type="text" v-model="user.name" />
            <button @click="save">{{buttonVal}}</button>
        </div>

        <ul>
            <li v-for="(card, idx) in cards" :key="card.id">
                <label>
                    <input type="checkbox" @change="updateUserCards(card, idx)" :checked="isChecked(card.id)" /> {{card.name}}
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import MyNav from '../components/MyNav'
import MyHeader from '../components/MyHeader'

import { SET_USER } from '../modules/UserModule.js';
import CardServ from '../services/CardServ.js'
import StorageServ from '../services/StorageServ.js'

export default {
    data() {
        return {
            user: null,
            cards: CardServ.cards,
        }
    },
    computed: {
        buttonVal() {
            var value = this.$store.getters.user.name ||
                this.$store.getters.user.cards.length ?
                'Update' : 'Save'
            return value
        },
    },
    destroyed() {
        this.user = null;
    },
    methods: {
        save() {
            this.$store.commit({ type: SET_USER, user: this.user });
            // var user = this.$store.getters.user
            // console.log('user ', user)
            StorageServ.store('user', this.user)
            this.$router.push('/');
        },
        updateUserCards(card, idx) {
            var userCardIdx = this.user.cards.indexOf(card.id);
            if (this.user.cards.includes(card.id)) {
                this.user.cards.splice(userCardIdx, 1)
            } else {
                this.user.cards.push(card.id)
            }
        },
        isChecked(cardId) {
            return this.user.cards.includes(cardId);
        }
    },
    components: {
        MyNav,
        MyHeader
    },
    created() {
        this.user = JSON.parse(JSON.stringify(this.$store.getters.user));
    },
}
</script>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33333vw;
    margin: auto;
}

ul {
    display: flex;
    padding: 0;
    flex-direction: column;
}

ul li {
    list-style: none;
    text-align: left;
}
</style>

