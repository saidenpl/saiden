<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>
