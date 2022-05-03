<template>
  <div>
    <q-btn
      :disable="activatorDisabled"
      @click="open"
      :label="title"
      class="btn"
    />
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-title-color">{{ title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="close" type="reset" />
        </q-card-section>

        <q-card-section>
          <q-form ref="myForm">
            <slot/>
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            type="submit"
            label="Guardar"
            :disable="!valid|| saveButtonDisabled"
            @click="save()"
            class="btn"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'FormModal',
  props: {
    activatorDisabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    saveButtonDisabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
      valid: true
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.$refs.form.resetValidation()
      }, 300)
    },
    save () {
      // if (this.$refs.form.validate()) {
      this.$emit('saved')
      // }
    },
    resetForm () {
      this.$refs.myForm.reset()
    },
    resetValidation () {
      this.$refs.myForm.resetValidation()
    }

  }
}
</script>

<style scoped>
.text-title-color {
  color: #002F6C;
}
</style>
