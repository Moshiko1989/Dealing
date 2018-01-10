<template>
    <div @click="clicked">
        <expand-ball @click="clicked" class="ball-pos" :options="expression">
            <router-link slot="menu" tag="span" to="/">Home</router-link>
           <router-link slot="menu" tag="span" to="/profile">Profile</router-link>
        </expand-ball>
    </div>
</template>

<script>

export default {
    data() {
        return {
            expression: {
                ballSize: 40,
                ballColor: '#7abfbf',

            }
        }
    },
    methods: {
        clicked() {
            // debugger;
            // console.log('alert()')
            this.$emit('menuClicked')
        }
    }
}
</script>

<style scoped>
.ball-pos {
    /* bottom: 200px;
    right: 200px; */
}

span {
    font-size: 0.8em;
}
</style>
