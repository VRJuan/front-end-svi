<script setup>
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">SVI</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        v-if="authStore.user"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Cajeros</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/products" class="dropdown-item"
                  >Productos</router-link
                >
              </li>
              <li>
                <router-link to="/graphics" class="dropdown-item"
                  >Estadisticas</router-link
                >
              </li>
              <li>
                <router-link to="/reports" class="dropdown-item"
                  >Reportes</router-link
                >
              </li>

              <!-- <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/email" class="nav-link">Correos</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item px-lg-5 mb-mt-1">{{ authStore.user.name }}</li>
          <li class="nav-item px-lg-5">
            <button
              @click="($event) => authStore.logout"
              class="btn btn-danger"
              type="submit"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
