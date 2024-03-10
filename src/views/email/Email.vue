<script setup>
const emails = [
  "juan@example.com",
  "maria@example.com",
  "pedro@example.com",
  "pablo@example.com",
  "juan.maria@example.com",
  "pedro.pablo@example.com",
  "juan.pedro@example.com",
];
</script>
<template>
  <div>
    <h2 class="mt-4">Notificaciones de Correo</h2>
    <table class="table table-striped mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo Electrónico</th>
          <th scope="col">Asunto</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(email, index) in emails" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>Usuario {{ index + 1 }}</td>
          <td>{{ email }}</td>
          <td>Notificación Importante</td>
          <td>
            <span class="badge bg-success">Activo</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
