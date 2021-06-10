<template>
  <q-page class="row justify-center">
    <div class="col-xl-7 col-lg-7 col-md-8 col-sm-10 col-xs-12 shadow-10 q-mt-xl" style="border-radius: 50px; background-color: white">
      <timeline />
    </div>
  </q-page>
</template>

<script>

import Timeline from 'components/Timeline'

export default {
  components: {
    Timeline
  },
  name: "About"
}
</script>

<style scoped>

</style>
