<template>
    <div>
    
     <b-row class="mx-auto">
     <input class="form-control mx-3" type="text" v-model="search" placeholder="search characters"/>
            <CharacterCard v-for="character in filteredCharacters" :key="character.id"
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
                offset: 21,
                search: ''
            }
        },
        mounted(){
            this.getCharacters()
        },
        methods:{
            getCharacters: function(){
                axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}&limit=21`)
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
                axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}&limit=21&offset=${this.offset}`)
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
        },
        computed: {
                filteredCharacters: function(){
                    return this.characters.filter((character) => {
                       return character.name.toLowerCase().match(this.search.toLowerCase());
                        
                    });
                }
            }
    }


</script>

<style>
    .card a:hover{
        text-decoration: none;
    }
</style>
