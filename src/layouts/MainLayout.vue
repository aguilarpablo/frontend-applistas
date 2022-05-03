<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-bluemarine">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawerOpen"
        />

        <q-toolbar-title>
          Lista Señales App
        </q-toolbar-title>

        <q-avatar>
          <img
            src="~assets/isotipo-blanco.svg"
          />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menú principal
        </q-item-label>
        <LeftDrawerItem
          v-for="item in leftDrawerItems"
          :key="item.title"
          v-bind="item"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawerItem from 'src/components/LeftDrawerItem.vue'
import appRoutes from 'src/router/AppRoutes'

const itemsData = [
  {
    title: 'Explotaciones',
    icon: 'factory',
    to: appRoutes.EXPLOTACION_LIST
  },
  {
    title: 'Estaciones',
    icon: 'warehouse',
    to: appRoutes.ESTACION_LIST
  },
  {
    title: 'Señales',
    icon: 'speed',
    to: appRoutes.SEÑAL_LIST
  }
]

export default {
  name: 'MainLayout',
  components: {
    LeftDrawerItem
  },
  data () {
    return {
      leftDrawerOpen: false,
      leftDrawerItems: itemsData
    }
  },
  methods: {
    toggleLeftDrawerOpen () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style scoped>
.bg-bluemarine {
  background-color: #002F6C;
}
</style>
