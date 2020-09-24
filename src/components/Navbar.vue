<template>
  <div class="bg-dark mb-3 mb-md-5">
    <div class="container">
       <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
          <div>
            <router-link to="/" class="navbar-brand">
              <img src='@/assets/Marvel-Logo.png' width="120px">
            </router-link>
          </div>
        </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bg-dark{
      background-color: black!important;
    }

    .navbar-toggler{
      color: #fff;
      border-color: #fff
    }

</style>
