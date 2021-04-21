<template>
  <q-layout view="hHh lpR fFf">

    <q-header style="background-color: #8e8e8e; height: 80px" class="text-black" elevated>
      <div class="q-mt-md row justify-between">
        <div class="col-4">
          <div class="q-ml-xl q-mt-md name text-white basic-text" style="font-size: 15px" @click="$router.push('/')">
            MARTIN ROUGERON
          </div>
        </div>
        <div class="col-8 row justify-end">
          <q-btn
              flat
              color="white"
              style="background-color: transparent"
              class="q-mx-xl button"
          >
            RÉSEAUX
          </q-btn>
          <q-btn
              flat
              color="white"
              style="background-color: transparent"
              class="q-mx-xl button"
              to="about"
          >
            ABOUT
          </q-btn>
        </div>
      </div>
    </q-header>

    <q-page-container style="background-color: #8e8e8e">
      <transition
          :name="this.$route.path === '/project' ? 'ii-slide-fade' : 'i-slide-fade'"
          mode="out-in"
      >
        <router-view/>
      </transition>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.name:hover {
  cursor: pointer;
}

.i-slide-fade-enter-active {
  transition: all 1s ease;
}

.i-slide-fade-leave-active {
  transition: all 1s;
}

.i-slide-fade-enter
  /* .i-slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(-100vh);
  opacity: 0;

}

.i-slide-fade-leave-to
  /* .i-slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100vh);
  opacity: 0;
}

.ii-slide-fade-enter-active {
  transition: all 2s ease-out;
}

.ii-slide-fade-leave-active {
  transition: all 2s;
  opacity: 0;
}

.ii-slide-fade-enter
  /* .ii-slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100vh);
  opacity: 0;
}

.ii-slide-fade-leave-to
  /* .i-slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(-100vh);
}

</style>