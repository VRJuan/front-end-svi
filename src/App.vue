<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav></Nav>
  <div class="col py-3">
    <RouterView />
  </div>
</template>
