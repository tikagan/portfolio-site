<template>
  <div class="hello">
    <button @click="toggleName"> SKILLS </button>
    <div :class='{"hidden": isHidden}'>
      {{ name }} 
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'skills',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['isHidden', 'name'])
  },
  data() {
    return {}
  },
  methods: {
    toggleName(){
      this.$store.commit('toggleName')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hidden{
  display: none;
}
</style>
