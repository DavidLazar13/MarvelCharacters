<template>
  <div id="app">
    <Navbar/>
    <b-container>
      <b-row class="d-flex justify-content-md-between justify-content-center">
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import CharacterCard from './components/CharacterCard.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    CharacterCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
