<template>
  <q-page>
    <timeline />
  </q-page>
</template>

<script>

import Timeline from 'components/Timeline'

export default {
  components: {
    Timeline
  },
  name: ""
}
</script>

<style scoped>

i-slide-fade-enter-active {
  transition: all 1s ease;
}

.i-slide-fade-leave-active {
  transition: all 1s;
}

.i-slide-fade-enter
  /* .i-slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100vh);
  opacity: 0;

}

.i-slide-fade-leave-to
  /* .i-slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(-100vh);
  opacity: 0;
}


</style>