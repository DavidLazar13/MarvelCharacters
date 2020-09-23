<template>
  <div class="bg-dark mb-5">
    <div class="container">
       <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand">
            <img src='@/assets/Marvel-Logo.png' width="120px">
          </router-link>
        
          <form class="form-inline my-2 my-lg-0 ml-auto">
            <input class="form-control mr-sm-2" type="search" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
   
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
