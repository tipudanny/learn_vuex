<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div
            :style="{ color: $store.state.colorCode}"
            class="counter"
        >
            {{$store.state.counter}}
        </div>

        <div class="counter-squire">
            {{$store.state.counter}} <sup>2</sup> = {{$store.getters.counterSquire}}
        </div>
        <button @click="$store.commit('decreaseCounter')"> - </button>
        counter
        <button @click="$store.dispatch('increaseCounter')"> + </button>
        <br>
        <input
            v-model="colorCode"
            placeholder="Enter color code"
            type="text"
        >
    </div>
</template>

<script>

export default {
    name: 'Home',
    data(){
        return{

        }
    },
    computed:{
        colorCode:{
            get(){
                return this.$store.state.colorCode
            },
            set(newValue){
                this.$store.dispatch('setColorCode',newValue)
            }
        }
    }
}
</script>
<style>
button{
    padding: 10px;
    font-size: medium;
    margin: 10px;
}
.counter{
    font-size: xxx-large;
    margin: 10px;
}
</style>