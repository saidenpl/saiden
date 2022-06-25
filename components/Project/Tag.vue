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
  color: red;
}
</style>
