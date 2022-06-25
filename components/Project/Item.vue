<template>
  <div class="project-item">
    <div class="project-details">
      <span class="project-title">{{ title }}</span>
      <span class="project-time">{{ from }} - {{ to }}</span>
    </div>
    <hr />
    <div class="project-description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'from', 'to'],
}
</script>

<style>
.project-item {
  color: white;
  display: table;
  grid-row: auto;
}
.project-title,
.project-time {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.project-title {
  display: inline-block;
  float: left;
}

.project-item {
  width: 100%;
}

.project-time {
  color: gray;
  display: inline-block;
  float: right;
}
</style>
