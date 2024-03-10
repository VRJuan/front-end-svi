<script setup>
import { ref, nextTick } from "vue";
import { sendRequest } from "../../funtions";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
axios.defaults.headers.common["Authorization"] =
  "Bearer " + authStore.authToken;

const form = ref({
  nombre: "",
  correo: "",
  cedula: "",
  fecha_nacimiento: "",
  cargo_id: "",
});

const save = () => {
  sendRequest("POST", form.value, "/api/usuarios", "/users");
  form.value.nombre = "";
  form.value.correo = "";
  form.value.cedula = "";
  form.value.fecha_nacimiento = "";
  form.value.cargo_id = "";
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
        Crear nuevo empleado o cajero
      </h1>
      <div class="card border border-warning mt-3">
        <div class="card-header bg-warning border border-warning">Crear</div>
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
                required
                autofocus
                type="text"
                v-model="form.correo"
                placeholder="Correo"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <input
                required
                autofocus
                type="text"
                v-model="form.cedula"
                placeholder="Cedula"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <input
                required
                autofocus
                type="text"
                v-model="form.fecha_nacimiento"
                placeholder="fecha_nacimiento"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <select class="form-select" v-model="form.cargo_id" required>
                <option value="1">Motorboat Mechanic</option>
                <option value="2">Law Clerk</option>
                <option value="3">Actor platino</option>
                <option value="4">Orthodontist</option>
                <option value="5">Silversmith</option>
                <option value="6">TSA</option>
                <option value="7">Database Administrator</option>
                <option value="8">Copy Writer</option>
                <option value="9">Project Manager</option>
                <option value="10">Sales Engineer</option>
                <option value="11">Veterinarian</option>
                <option value="12">Electronic Equipment Assembler</option>
                <option value="13">Mechanical Drafter</option>
                <option value="14">Human Resources Specialist</option>
                <option value="15">Rental Clerk</option>
                <option value="16">Industrial Equipment Maintenance</option>
                <option value="17">Wholesale Buyer</option>
                <option value="18">Instrument Sales Representative</option>
                <option value="19">Preschool Education Administrators</option>
                <option value="20">Tile Setter OR Marble Setter</option>
                <option value="21">Driver-Sales Worker</option>
                <option value="24">Tecnico desarrollador</option>
                <option value="25">desarrollador2</option>
                <option value="26">desarrollador4</option>
              </select>
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
