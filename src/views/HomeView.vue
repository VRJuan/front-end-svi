<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="container mt-5">
      <h2>Ultimos empleados/cajeros registrados</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan</td>
            <td>juan@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>María</td>
            <td>maria@example.com</td>
          </tr>
          <!-- Agrega más filas según sea necesario -->
        </tbody>
      </table>

      <h2>Ultimos productos agregados</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Zapatos</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Camiseta</td>
            <td>$20.00</td>
          </tr>
          <!-- Agrega más filas según sea necesario -->
        </tbody>
      </table>
    </div>
  </main>
</template>
