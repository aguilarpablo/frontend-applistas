<template>
  <div class="flex flex-center">
   <q-select
      label="Explotación"
      transition-show="scale"
      transition-hide="scale"
      filled
      v-model="explotacion"
      :options="options"
      style="width: 250px"
      :rules="[val => val !== null && val !== '' && val && val.length > 0 ||'Por favor, seleccione una explotación']"
    />
    <q-input
        filled
        type="text"
        v-model="cebeIas"
        label="Cebe Ias"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, introduzca un Cebe Ias',
          val => val.length === 3 || 'Por favor, introduzca un Cebe Ias correcto'
        ]"
    />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: [],
      required: true
    }
  },
  data () {
    return {
      explotacion: null,
      cebeIas: null
    }
  }
}
</script>
