<script setup>
import { ref, onMounted } from "vue";
import { comfirmation } from "../../funtions";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
axios.defaults.headers.common["Authorization"] =
  "Bearer " + authStore.authToken;

onMounted(() => {
  getProduts();
});

const users = ref([]);
const load = ref(false);

const getProduts = async () => {
  await axios.get("/api/todoslosusuarios").then((response) => {
    users.value = response.data;

    load.value = true;
  });
};

const deleteUser = (id, name) => {
  comfirmation(name, "/api/usuarios/" + id, "/users");
};
</script>
<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div class="d-grid col-10 mx-auto">
        <router-link to="/create-user" class="btn btn-dark">
          <i class="fa-solid fa-circle-plus"></i> Añadir nuevo empleado
        </router-link>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card border border-white text-center" v-if="!load">
        <div class="card-body">
          <img src="/loading.gif" alt="Loading image" />
        </div>
      </div>
      <div class="table-responsive" v-else>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Cedula</th>
              <th>Fecha de nacimiento</th>
              <th>Cargo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(user, i) in users" :key="user.id">
              <td>{{ i + 1 }}</td>
              <td>{{ user.nombre }}</td>
              <td>{{ user.correo }}</td>
              <td>{{ user.cedula }}</td>
              <td>{{ user.fecha_nacimiento }}</td>
              <td>{{ user.cargo }}</td>
              <td>
                <router-link
                  :to="{ path: '/editUser/' + user.id }"
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-edit"></i
                ></router-link>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="($event) => deleteUser(user.id, user.nombre)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
