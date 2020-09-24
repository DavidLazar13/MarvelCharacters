<template>
    <div>
     <b-row class="mx-auto">
            <CharacterCard v-for="character in characters" :key="character.id"
                :characterName="character.name"
                :id="character.id"
                :thumbnail="character.thumbnail.path + '/standard_fantastic.jpg'"
                :altDescription="character.name">
            </CharacterCard>
      </b-row>
      <div class="row justify-content-center my-5">
        <button type="button" class="btn btn-dark" @click="loadMore()">Load More</button>
      </div>
    </div>
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
                offset: 20
            }
        },
        mounted(){
            this.getCharacters()
        },
        methods:{
            getCharacters: function(){
                axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}&limit=20`)
                    .then((result) => {
                        result.data.data.results.forEach((item) => {
                            console.log(item)

                            this.characters.push(item)
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                
            },
            loadMore: function(){
                axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}&limit=20&offset=${this.offset}`)
                .then((result) => {
                        result.data.data.results.forEach((item) => {
                            console.log(item)
                            this.characters.push(item)
                            this.offset = this.characters.length + 20
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
