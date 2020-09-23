<template>
     <b-row class="mx-auto">
            <CharacterCard v-for="character in characters" :key="character.id"
                :characterName="character.name"
                :id="character.id"
                :thumbnail="character.thumbnail.path + '/standard_fantastic.jpg'"
                :altDescription="character.name">
            </CharacterCard>
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
                characters: [],
                url: '',
                size: 'portrait_uncanny.jpg',
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

<style>
    .card a:hover{
        text-decoration: none;
    }
</style>
