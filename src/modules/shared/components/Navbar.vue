<template lang="">
    <div>
        <!-- <router-link :to="{ name:'home' }">List Page</router-link >
        <router-link :to="{ name:'pokemon-id', params:{id: 90}}">Pokemon Page</router-link >
        <router-link :to="{ name:'about'}">About Page</router-link > -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default { 
    data(){
        return{
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'Por ID', id: 151},
                {to: 'pokemon-about', name: 'About'},
                {to: 'https://google.com', name: 'Google'},
            ]
        }   
    },
    components:{
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>
<style scoped>
    div{
        padding: 0 30px;
    }

    div a{
        font-weight: bold;
        color: aliceblue;
        margin: 0 10px;
    }

    /* div .router-link-exact-active{
        color: #42b983;
    } */
</style>