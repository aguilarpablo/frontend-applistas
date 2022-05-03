<template>
  <form-modal
    title="Crear Explotación"
    :loading="loading"
    ref="formModal"
  >
    <explotacion-fields :options="options" />
  </form-modal>
</template>

<script>
import FormModal from 'src/components/shared/FormModal.vue'
import ExplotacionFields from 'src/components/explotaciones/ExplotacionFields.vue'

export default {
  components: {
    FormModal,
    ExplotacionFields
  },
  props: {
    options: {
      type: [],
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>
