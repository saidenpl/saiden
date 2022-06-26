<template>
  <div>
    <ProjectItem
      title="Roomzilla"
      from="2016-11"
      to="2021-08"
      web="https://roomzilla.net"
      client="Roomzilla sp. z o.o."
      role="Senior Developer"
      :tags="[
        'ruby',
        'postgresql',
        'heroku',
        'azure',
        'googleApi',
        'msgraph',
        'redis',
      ]"
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
        <li>Hosted on Heroku</li>
      </ul>
    </ProjectItem>

    <ProjectItem
      title="Ipla TV"
      from="2014-05"
      to="2016-11"
      web="https://ipla.tv"
      client="Cyfrowy Posat sp. z o.o."
      :tags="[
        'ruby',
        'postgresql',
        'heroku',
        'azure',
        'googleApi',
        'msgraph',
        'redis',
      ]"
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
        <li>Hosted on Heroku</li>
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
