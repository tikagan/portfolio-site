<template>
  <div id="app">
    
    <HelloWorld />
    <about />
    <skills />
    <projects />
    <contact />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import about from './components/views/about.vue'
import skills from './components/views/skills.vue'
import projects from './components/views/projects.vue'
import contact from './components/views/contact.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    about,
    skills,
    projects,
    contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
