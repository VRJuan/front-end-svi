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

const products = ref([]);
const load = ref(false);

const getProduts = async () => {
  await axios.get("/api/todoslosproductos").then((response) => {
    products.value = response.data;

    load.value = true;
  });
};

const deleteProdut = (id, name) => {
  comfirmation(name, "/api/productos/" + id, "/products");
};
</script>
<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div class="d-grid col-10 mx-auto">
        <router-link to="/create" class="btn btn-dark">
          <i class="fa-solid fa-circle-plus"></i> Añadir nuevo producto
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
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(product, i) in products" :key="product.id">
              <td>{{ i + 1 }}</td>
              <td>{{ product.nombre }}</td>
              <td>{{ product.descripcion }}</td>
              <td>{{ product.categorias }}</td>
              <td>{{ product.precio }}</td>
              <td>{{ product.cantidad }}</td>
              <td>
                <router-link
                  :to="{ path: '/edit/' + product.id }"
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-edit"></i
                ></router-link>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="($event) => deleteProdut(product.id, product.nombre)"
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
