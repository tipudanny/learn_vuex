import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter:0,
        colorCode:'green',
    },
    mutations: {
        decreaseCounter(state){
            state.counter--
        },
        increaseCounter(state,randomNumber){
            state.counter+= randomNumber
        },
        setColorCode(state,newValue){
            state.colorCode = newValue
        }
    },
    actions: {
        increaseCounter({ commit }){
            axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
                .then(response =>{
                    console.log(response.data)
                    commit('increaseCounter',response.data)
                })
        },
        setColorCode({commit},newValue){
            commit('setColorCode', newValue)
        }
    },
    getters:{
        counterSquire(state){
            return state.counter * state.counter
        }
    },
    modules: {
    }
})
