<template>
  <div>
    <ProjectItem
      title="Roomzilla"
      from="2016-11-01"
      to="2021-08-01"
      web="https://roomzilla.net"
      :tags="['ruby', 'postgresql', 'heroku']"
    >
      A SaaS resource booking system. Originally specific to conference rooms,
      eventually allowing for booking almost any office resource.
      <ul>
        <li>
          Tablet web app for direct control and status display of a resource
        </li>
        <li>Rails 6 backend</li>
        <li>Vue 2.6 frontend</li>
        <li>Calendar integrations using Google API and MS Graph</li>
      </ul>
    </ProjectItem>
  </div>
</template>

<style>
a,
a:active,
a:visited,
a:hover {
  text-decoration: none;
  color: lightgray;
}

a:hover {
  color: white;
}
</style>
