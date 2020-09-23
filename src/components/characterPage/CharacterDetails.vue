<template>
    <div>
        <h1>Here are the characters details</h1>
        <p>{{ this.$route.params.id }}</p>

        <ul>
            <li v-for="char in character" :key="char.id">
                {{char.name}}
                {{char.description}}
            </li>

            <img :src="url" alt="">
        </ul>
    </div>
</template>


<script>
import { public_key } from '@/marvel'
import axios from 'axios'

export default {
    name: 'CharacterDetails',
    data(){
        return{
            character:[],
            url: '',
            size: 'portrait_uncanny.jpg',
        }
    },
    mounted(){
        this.getCharacter()
    },
    methods: {
        getCharacter: function(){

            var characterId = this.$route.params.id

            axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`)
                .then((result) => {
                    
                    console.log(result)
                    result.data.data.results.forEach((item) => {
                        this.character.push(item)
                        this.url = `${item.thumbnail.path}/${this.size}`

                        console.log(this.url)
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


</style>