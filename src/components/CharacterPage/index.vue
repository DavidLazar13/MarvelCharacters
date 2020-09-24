<template>
    <div class="row">
        <div class="col-12 col-md-4">
            <img :src="url" alt="heroimg" class="hero-img">
        </div>
        <div v-for="char in character" :key="char.id" class="col-12 col-md-8 pt-4 pt-md-0" >
                <h1>{{char.name}}</h1>

                <div v-if="char.description == 0" class="mb-5">
                   No description available
                </div>
                 <div v-else class="mb-5">
                    <p class>{{char.description}}</p>
                </div>

                
                <h3>Series:</h3>
                <div v-if="series == 0" class="mb-3">
                   No info available
                </div>
                 <div v-else class="mb-3">
                    <p v-for="serie in series" :key="serie.id">
                    {{serie.name}}
                    </p>
                </div>

                <h3>Stories:</h3>
                <div v-if="stories == 0" class="mb-3">
                   No info available
                </div>
                 <div v-else class="mb-3">
                    <p v-for="story in stories" :key="story.id">
                    {{story.name}}
                    </p>
                </div>

                <h3>Events:</h3>
                <div v-if="events == 0" class="mb-3">
                   No info available
                </div>
                 <div v-else class="mb-3">
                    <p v-for="event in events" :key="event.id">
                    {{event.name}}
                    </p>
                </div>

        </div>
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
            series:[],
            stories: [],
            events: [],
            url: '',
            size: 'standard_fantastic.jpg',
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
                    
                    result.data.data.results.forEach((item) => {
                        this.character.push(item)
                        this.url = `${item.thumbnail.path}/${this.size}`
                        this.series = item.series.items
                        this.stories = item.stories.items
                        this.events = item.events.items

                        console.log(this.series)
                    })

                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    
}

</script>

<style scoped>
    p{
        margin-bottom: 0rem;
    }
    .hero-img{
        width: 100%;
    }
</style>