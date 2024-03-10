<script setup>
import { ref, onMounted } from "vue";
import { sendRequest } from "../../funtions";
import { useAuthStore } from "../../stores/auth";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();
axios.defaults.headers.common["Authorization"] =
  "Bearer " + authStore.authToken;

const form = ref({
  id: "",
  nombre: "",
  descripcion: "",
  categoria_id: "",
  precio: "",
  cantidad: "",
});

const id = ref(route.params.id);
onMounted(() => {
  getProduct();
});

const getProduct = () => {
  axios
    .get("/api/productos/" + id.value)
    .then(
      (response) => (
        (form.value.nombre = response.data.data.nombre),
        (form.value.descripcion = response.data.data.descripcion),
        (form.value.categoria_id = response.data.data.categoria_id),
        (form.value.precio = response.data.data.precio),
        (form.value.cantidad = response.data.data.cantidad)
      )
    );
};

const save = () => {
  sendRequest("PUT", form.value, "/api/productos/" + id.value, "/products");
};
</script>
<template>
  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <h1
        style="
          text-shadow: 1px 1px 1px black, 2px 2px 1px black;
          text-align: center;
        "
      >
        Editar producto
      </h1>
      <div class="card border border-warning mt-3">
        <div class="card-header bg-warning border border-warning">Editar</div>
        <div class="card-body">
          <form @submit.prevent="save">
            <div class="input-group mb-3">
              <input
                required
                autofocus
                type="text"
                v-model="form.nombre"
                placeholder="Nombre"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <input
                autofocus
                type="text"
                v-model="form.descripcion"
                placeholder="Descripcion"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <select class="form-select" v-model="form.categoria_id" required>
                <option value="1">ut</option>
                <option value="2">dolore</option>
                <option value="3">test categoria</option>
                <option value="4">et</option>
                <option value="5">tenetur</option>
                <option value="6">rerum</option>
                <option value="7">cumque</option>
                <option value="8">nostrum</option>
                <option value="9">vitae</option>
                <option value="10">eos</option>
                <option value="11">vero</option>
                <option value="12">fugiat</option>
                <option value="13">sapiente</option>
                <option value="14">totam</option>
                <option value="15">reiciendis</option>
                <option value="16">consectetur</option>
                <option value="17">accusamus</option>
                <option value="18">sunt</option>
                <option value="22">test catertwegoria</option>
                <option value="23">Papas vegetariana</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <input
                required
                autofocus
                type="text"
                v-model="form.precio"
                placeholder="Precio"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <input
                required
                autofocus
                type="text"
                v-model="form.cantidad"
                placeholder="Cantidad"
                class="form-control"
              />
            </div>
            <div class="d-grid col-10 mx-auto">
              <button class="btn btn-dark">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
