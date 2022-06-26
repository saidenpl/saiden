<template>
  <div class="welcome">
    <div class="logo">
      <img src="logo.png" alt="" />
    </div>
    <div class="welcome-text">
      <h3>Welcome to Saiden, a sanctuary of digital thought</h3>
    </div>
    <NuxtLink to="/about">
      <Button>
        See more about me
        <i class="fa-solid fa-arrow-right"></i>
      </Button>
    </NuxtLink>
  </div>
</template>

<style>
.logo > img {
  margin-top: 5em;
  margin-bottom: 5em;
  height: 250px;
}

div.welcome-text > h3 {
  color: white;
  text-align: center;
}

.welcome {
  text-align: center;
}
</style>
