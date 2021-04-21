<template>
  <div class="bg-green text-white text-center q-pa-md flex flex-center">

  </div>
</template>

<script>

import { projects } from '../constants/projectsList'

export default {
  name: 'Project',
  data () {
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
