<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <q-img
          class="rounded-borders col-10 full-height row shadow-10"
          :src="project.image_url"
          style="max-width: 70vw; transition: 0.8s"
          :ratio="2"
      >
        <div class="flex flex-center basic-text col-9 text-white absolute-bottom " style="font-size: min(50px, 3vw);">
          Project {{ project.name }}
        </div>
      </q-img>
    </div>
    <div class="xs-hide sm-hide">
      <div class="row justify-start q-pl-xl-xl q-pa-md" style="font-size: min(20px, 4vw)">
        <div class="col-7 text-justify">
          <div class="q-pa-md">
            {{ project.text1 }}
          </div>
        </div>
        <div class="flex flex-center q-ml-xl text-h2">
          Project Goal
        </div>
      </div>
      <div class="row justify-end q-pl-xl-xl q-pa-md" style="font-size: min(20px, 4vw)">
        <div class="flex flex-center q-mr-xl text-h2">
          Achievements
        </div>
        <div class="col-7 text-justify">
          <div class="q-pa-md">
            {{ project.text2 }}
          </div>
        </div>
      </div>
    </div>
    <div class="xs-show sm-show">
      <div class="row justify-center q-pl-xl-xl q-pa-md" style="font-size: min(20px, 4vw)">
        <div class="flex flex-center col-10 q-mt-lg text-h3">
          Project Goal
        </div>
        <div class="col-10 text-justify">
          <div class="q-pa-md">
            {{ project.text1 }}
          </div>
        </div>
      </div>
      <div class="row justify-center q-pl-xl-xl q-pa-md" style="font-size: min(20px, 4vw)">
        <div class="flex flex-center col-10 q-mt-lg text-h3">
          Achievements
        </div>
        <div class="col-10 text-justify">
          <div class="q-pa-md">
            {{ project.text2 }}
          </div>
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
