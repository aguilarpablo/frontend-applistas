<template>
  <q-table
      class="my-sticky-dynamic"
      :title="title"
      :columns="columns"
      :data="data"
      row-key="id"
      :loading="loading"
      virtual-scroll
      :virtual-scroll-sticky-size-start="48"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
    </template>
    </q-table>
</template>

<script>

export default {
  props: {
    data: {
      type: [],
      required: true,
      default: []
    },
    columns: {
      type: [],
      required: true,
      default: []
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      pagination: {
        rowsPerPage: 0
      },
      filter: ''
    }
  }
}
</script>

<style scope lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 650px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
