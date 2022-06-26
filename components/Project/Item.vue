<template>
  <div class="project-item">
    <div class="project-details">
      <div class="project-title"><strong>{{ title }}</strong> for {{client}}</div>
      <div class="project-time">{{ from }} - {{ to }}</div>
    </div>
    <div class="project-website">
      <a :href="web">{{ web }}</a>
    </div>
    <hr />
    <div class="project-description">
      <slot></slot>
      <ProjectTag v-for="tag in tags" :key="tag" :name="tag" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'from', 'to', 'web', 'tags', 'client'],
}
</script>

<style>
.project-item {
  color: white;
  display: table;
}

.project-title > strong,
.project-time {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.project-time {
  float: right;
}

.project-title {
  font-weight: bold;
  display: inline-block;
}

.project-item {
  width: 100%;
}

.project-website,
.project-time {
  color: gray;
  display: inline-block;
}

.project-description {
  color: lightgray;
}
</style>
