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
        'rails',
        'postgresql',
        'heroku',
        'azure',
        'googleApi',
        'msgraph',
        'redis',
      ]"
    >
      A SaaS resource booking system. Originally specific to conference rooms,
      eventually allowing for booking almost any office resource. I bootstrapped
      two new versions of the product and was responsible for most tech related
      choices in the project. Long time sole devloper of the project. Took part
      in creation of the tech team: FE, QA additionas
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
      title="Kantei"
      from="2015-01"
      to="2016-11"
      web="https://www.polsatbox.pl/"
      client="Cyfrowy Posat S.A."
      role="Senior Developer"
      :tags="['ruby', 'rails', 'mongodb', 'docker']"
    >
      A Continious Delivery platform based on Docker. Sole author and designer
      of the solution. Rails monolith along with Ruby processes handling the
      path of an application from git push to deploy
      <ul>
        <li>Rails 4 then 5 monolith</li>
        <li>Docker API</li>
        <li>MongoDB backend storage</li>
        <li>Async jobs and cron-like handling</li>
        <li>Worker and Web processes</li>
      </ul>
    </ProjectItem>

    <ProjectItem
      title="Ipla TV"
      from="2014-05"
      to="2016-11"
      web="https://ipla.tv"
      client="Cyfrowy Posat S.A."
      role="Senior Developer"
      :tags="['ruby', 'rails', 'postgresql', 'mongodb', 'redis']"
    >
      A VOD Platform and its backend-supporting services for media management. A
      fun job related to a large VOD provider owned by one of the largest media
      companies in the country. Here I was also mentoring newly acquired talent.
      <ul>
        <li>Legacy Rails 3 and 4 backends</li>
        <li>jQuery</li>
        <li>Facebook integrations</li>
        <li>PostgreSQL databases with media metadata</li>
      </ul>
    </ProjectItem>

    <ProjectItem
      title="Scanner"
      from="2014-05"
      to="2016-11"
      web="https://www.polsatbox.pl/"
      client="Cyfrowy Posat S.A."
      role="Senior Developer"
      :tags="['ruby', 'rails', 'mongodb', 'redis']"
    >
      Co-designer of the project. A intelectual property tracking system.
      Responsible for finding and reporting illegal content. Support for most
      popular file hosting sites, Bittorrent trackers, RSS feeds, popular
      forums.
      <ul>
        <li>Rails 4 then 5 monolith</li>
        <li>jQuery</li>
        <li>Google search integrations</li>
        <li>Google DMCA</li>
        <li>MongoDB backend storage</li>
        <li>Scraper workers using Capybara and resque</li>
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
