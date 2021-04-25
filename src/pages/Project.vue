<template>
  <q-page class="q-pa-md">
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
    <div class="row justify-start q-pl-xl q-pa-md text-h4">
        <div class="col-7 text-justify">
          <div class="q-pa-md">
            {{ project.text1 }}
          </div>
        </div>
        <div class="flex flex-center q-ml-xl text-h2">
          Project Goal
        </div>
    </div>
    <div class="row justify-end q-pl-xl q-pa-md text-h4">
      <div class="flex flex-center q-mr-xl text-h2">
        Achievements
      </div>
      <div class="col-7 text-justify">
        <div class="q-pa-md">
          {{ project.text2 }}
        </div>
      </div>
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
