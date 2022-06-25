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
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  color: white;
  border: 2px solid white;
  border-radius: 0.4rem;
  padding: 0.2rem;
  min-width: 8rem;
  display: inline-block;
}
</style>
