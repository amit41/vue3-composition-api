<script setup>
import { ref } from "vue";
// Mobile hamburger nav
const showMobileNav = ref(false);

const hideMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};
</script>
<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 has-text-weight-semibold">
          Noteballs
        </div>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        @click="hideMobileNav"
      >
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">
            Notes
          </RouterLink>

          <RouterLink to="/stats" class="navbar-item" active-class="is-active">
            Statistics
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
