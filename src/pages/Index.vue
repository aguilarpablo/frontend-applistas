<template>
  <q-page class="container">
    <img
      alt="Dinapsis logo"
      src="~assets/dinapsis-color.svg"
    />
    <q-card class="my-card" style="width: 30%">
      <q-card-section class="text-h5">
        En esta página puede encontrar servicios para consultar, gestionar o
        crear listas de señales para el proyecto DCDC. Seleccione en el árbol de
        navegación la opción que desee.
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
