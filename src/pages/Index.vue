<template>
  <q-page class="q-pa-md">
    <div class="row justify-center col-12 text-white">
      <div class="flex flex-center basic-text col-12 basic-text" style="font-size: 50px; color: darkblue">
        MY WORKS
      </div>
      <q-carousel
          v-model="slide"
          swipeable
          transition-prev="jump-right"
          transition-next="jump-left"
          animated
          navigation
          control-color="white"
          infinite
          padding
          :arrows="!($q.screen.xs || $q.screen.sm)"
          :height="$q.screen.name === 'xs' ? '45vh' : '70vh'"
          class="text-white shadow-10 rounded-borders q-mt-lg col-sm-11 col-xs-11 col-md-6 col-lg-5 col-xl-5"
          style="margin-top: 80px; background-color: #3030b8"
      >
        <q-carousel-slide
            v-for="item in projects"
            :key="item.name"
            :name="item.name"
            class="column no-wrap flex-center q-pa-md"
        >
          <project-presentation :project="item" />
        </q-carousel-slide>
      </q-carousel>

    </div>
  </q-page>
</template>

<script>

import { projects } from '../constants/projectsList.js'
import projectPresentation from '../components/projectPresentation.vue'

export default {
  name: 'PageIndex',
  components: {
    projectPresentation
  },
  data() {
    return {
      slide: 'my_RPG',
      projects: projects,
    }
  }
}
</script>

<style scoped>

</style>
