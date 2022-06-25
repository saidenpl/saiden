<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <slot></slot>
    </div>
    <div>
      <ul>
        <li v-for="tag in tags" v-bind:key="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'tags'],
}
</script>
