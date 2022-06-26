<template>
  <div class="about">
    <div class="portrait">
      <img src="/portrait.jpg" alt="portrait" />
    </div>
    <h3 class="about-tagline">
      Communicative and resourceful Software Developer with significant
      experience
    </h3>
    <ul class="about-list">
      <li>
        Looking to secure an interesting and challenging roles within the ranks
        of a solid organization
      </li>
      <li>Eager to learn and always willing to help</li>
      <li>Glad to prototype and test new approaches</li>
      <li>Professional solution delivery from design to implementation</li>
      <li>
        Team leadership and project coordination experience available if
        required
      </li>
    </ul>
    <div class="portrait">
      <a href="/cv.pdf" target="_blank">
        <Button>
          <i class="fa-solid fa-file-pdf"></i> Download my CV as PDF
        </Button>
      </a>
      <NuxtLink to="/projects">
        <Button>
          Some of projects I have been part of
          <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
<style>
h3.about-tagline {
  text-align: center;
  color: white;
}

ul.about-list {
  padding-left: 4rem;
}

.portrait img {
  height: 250px;
  border-radius: 50%;
  border: 2px solid white;
  margin-bottom: 5rem;
  margin-top: 5rem;
}

.portrait {
  text-align: center;
}
</style>
