<template>
     <b-row class="d-flex justify-content-md-between justify-content-center">
        <CharacterCard/>
        <ul>
            <li v-for="character in characters" :key="character.id">
                <router-link :to="{ name: 'character', params: {id: character.id}}">{{character.name}} </router-link>
            </li>
        </ul>
      </b-row>
</template>

<script>
    import CharacterCard from '@/components/CharacterCard.vue'
    import { public_key } from '../marvel'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            CharacterCard
        },
        data() {
            return{
                characters: []
            }
        },
        mounted(){
            this.getCharacters()
        },
        methods:{
            getCharacters: function(){
                axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
                    .then((result) => {
                        result.data.data.results.forEach((item) => {
                            console.log(item)

                            this.characters.push(item)
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                
            }
        }
    }


</script>