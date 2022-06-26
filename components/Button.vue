<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['label'],
}
</script>

<style>
div.button {
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  color: red;
  display: inline-block;
  padding: 1rem;
  font-size: large;
}

div.button:hover {
  color: white;
  background-color: red;
}
</style>
