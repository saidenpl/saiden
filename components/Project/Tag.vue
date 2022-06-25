<template>
  <span class="tag">
    <i :class="iconClass()"></i>
    {{ name }}
  </span>
</template>
<script>
export default {
  props: ['name', 'icon'],
  methods: {
    iconClass() {
      return `devicon-${this.icon}`
    },
  },
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
