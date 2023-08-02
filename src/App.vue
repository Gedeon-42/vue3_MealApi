<template>
  <div>
    <nav>
      <div class="logo"><h3>mealmaker</h3></div>
      <div class="links">
        <router-link to="/">home</router-link>
        <router-link :to="{ name: 'byLetter' }">byletter</router-link>
        <router-link :to="{ name: 'category' }">categories</router-link>
        <router-link :to="{ name: 'ingredient' }">ingeredient</router-link>
        <router-link :to="{ name: 'byname' }">byname</router-link>
      </div>
    </nav>
  </div>

  <div class="container"><router-view /></div>
</template>
<script></script>

<style>
nav {
  display: flex;
  background: black;
  padding: 20px;
  color: white;
  align-items: center;
  justify-content: space-between;
}
.links {
  display: flex;
  align-items: center;
}
nav a {
  padding: 2px 14px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
}
</style>
