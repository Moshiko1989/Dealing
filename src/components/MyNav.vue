<template>
    
        <nav>
            <ul>
                <router-link tag="li" to="/">Home</router-link> 
                <router-link tag="li" to="">|</router-link> 
                <router-link tag="li" to="/profile">Profile</router-link>
            </ul>
        </nav>
    
    
</template>
<script>
export default {

}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

ul li {
    margin-left: 5px;
    cursor: pointer;
}
.router-link-exact-active {
    color: #8adddd
}
@media (max-width: 700px) {

}
</style>

