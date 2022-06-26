<template>
  <div class="project-item">
    <div class="project-details">
      <div class="project-title">
        <strong>{{ title }}</strong> as {{ role }} for {{ client }}
      </div>
      <div class="project-time">{{ from }} - {{ to }}</div>
    </div>
    <div class="project-website">
      <a :href="web" target="_blank">{{ web }}</a>
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
  props: ['title', 'from', 'to', 'web', 'tags', 'client', 'role'],
}
</script>

<style>
.project-item {
  margin-bottom: 4rem;
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

.project-title strong {
  color: red;
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
