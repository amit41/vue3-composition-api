<script setup>
import NavBar from "./components/layouts/NavBar.vue";
</script>

<template>
  <NavBar />
  <!-- <nav>
    <RouterLink to="/">Notes</RouterLink> |
    <RouterLink to="/stats">Stats</RouterLink>
  </nav> -->
  <main class="container is-max-desktop">
    <RouterView />
  </main>
</template>

<style scoped></style>
