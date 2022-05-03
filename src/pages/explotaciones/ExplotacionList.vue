<template>
  <div>
    <div class="q-pa-xs flex justify-end">
      <new-explotacion :options="explotacionesWithoutCebeIas"/>
      <!-- <base-button label="Crear Explotación 2" /> -->
    </div>
    <div class="q-pa-xs">
      <base-table
        title="Explotaciones"
        :columns="headers"
        :data="explotacionesCreated"
        :loading="isLoading"
      >
      </base-table>
    </div>
  </div>
</template>

<script>
import Headers from 'src/constants/HeadersTableExplotaciones.js'
import { explotacionesService } from 'src/services/ServiceInstances'
// import BaseButton from 'src/components/shared/BaseButton.vue'
import BaseTable from 'src/components/shared/BaseTable.vue'
import NewExplotacion from 'src/components/explotaciones/NewExplotacion.vue'

export default {
  components: {
    // BaseButton,
    BaseTable,
    NewExplotacion
  },
  data () {
    return {
      pagination: {
        rowsPerPage: 0
      },
      headers: Headers,
      explotaciones: [],
      explotacionesCreated: [],
      explotacionesWithoutCebeIas: [],
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    this.loadExplotaciones()
  },
  methods: {
    async loadExplotaciones () {
      this.explotaciones = await explotacionesService.findAll()
      this.filterExplotaciones()
    },
    filterExplotaciones () {
      this.explotacionesCreated = this.explotaciones.filter(explotacion => explotacion.cebeIas !== null)
      this.explotacionesWithoutCebeIas = [...new Set(this.explotaciones.filter(explotacion => explotacion.cebeIas === null).map(explotacion => explotacion.nombre))]
      console.log(this.explotacionesWithoutCebeIas)
      this.isLoading = false
    }
  }
}
</script>
