<template>
  <q-page class="q-pa-md" style="background-color: #8e8e8e">
    <div class="row justify-center">
      <q-img
          class="rounded-borders col-10 full-height row shadow-10"
          :src="project.image_url"
          style="max-width: 50vw; transition: 0.8s"
          :ratio="2"
      >
      </q-img>
      <div class="flex flex-center basic-text col-12 basic-text text-white" style="font-size: 50px; transform: translateY(-150px)">
        Project {{ project.name }}
      </div>
    </div>
    <div class="flex flex-center text-h6">
      {{ project.description }}
    </div>
  </q-page>
</template>

<script>

import {projects} from '../constants/projectsList'

export default {
  name: 'Project',
  data() {
    return {
      project: {}
    }
  },
  created() {
    projects.forEach(project => {
      console.log(project.name)
      console.log(this.$route.query.name)
      if (project.name === this.$route.query?.name) {
        this.project = project
      }
    })
  }
}
</script>
