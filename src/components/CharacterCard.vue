<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="@/assets/standard_incredible.jpg" class="card-img-top" alt="hero">
            <div class="card-body">
                <h5 class="card-title">Hero Name</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Character '
    }
</script>

<style scoped>
    .card{
        text-align: left;
        border: none;
        -webkit-box-shadow: 4px 6px 19px 2px rgba(0,0,0,0.19);
        -moz-box-shadow: 4px 6px 19px 2px rgba(0,0,0,0.19);
        box-shadow: 4px 6px 19px 2px rgba(0,0,0,0.19);      
    }
</style>