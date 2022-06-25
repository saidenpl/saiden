<template>
  <span class="tag">
    <i :class="iconClass()"></i>
    {{ iconName() }}
  </span>
</template>
<script>
const mappings = require('./mappings').default;

export default {
  props: ['name'],
  methods: {
    iconName() {
      return ( mappings[this.name] === undefined ) ? '' : mappings[this.name].name
    },
    iconClass() {
      return ( mappings[this.name] === undefined ) ? '' : `devicon-${mappings[this.name].icon}`
    }
  }
}
</script>
<style>
.tag {
  font-size: 1.2rem;
  background-color: white;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  color: red;
  border: 2px solid white;
  border-radius: 0.4rem;
  padding: 0.3rem;
  min-width: 9rem;
  display: inline-block;
}
</style>
