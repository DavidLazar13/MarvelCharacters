<template>
    <div class="col-12 col-md-6 col-lg-4 mx-auto">
    <router-link :to="'/character/'+ id">
            <div class="card my-4 mx-auto mx-md-1" style="width: 20rem;">
                <img :src="thumbnail" class="card-img-top" :alt="altDescription">
                <div class="card-body">
                    <h5 class="card-title">{{characterName}}</h5>
                </div>
            </div>
    </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Character',
        props: ['characterName', 'id', 'thumbnail', 'altDescription'],
    }
</script>

<style scoped>
    .card{
        text-decoration: none;
        color: black;
        text-align: left;
        border: none;
        -webkit-box-shadow: 4px 6px 19px 2px rgba(0,0,0,0.19);
        -moz-box-shadow: 4px 6px 19px 2px rgba(0,0,0,0.19);
        box-shadow: 4px 6px 19px 2px rgba(0,0,0,0.19);      
    }
    a:hover{
        text-decoration: none;
    }
</style>