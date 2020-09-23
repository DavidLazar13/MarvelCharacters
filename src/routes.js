import Home from './components/Home.vue';
import CharacterDetails from './components/characterPage/CharacterDetails.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/character/:id',
    name: 'character',
    component: CharacterDetails
  }
] 
