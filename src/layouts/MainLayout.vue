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
          :name="animationName"
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
    return {
      animationName : ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.path === '/project') {
        this.animationName = 'down-fade'
        console.log(`if (to.path === '/project') {`)
        return
      }
      if (to.path === '/about') {
        this.animationName = 'up-fade'
        console.log(`if (to.path === '/about') {`)
        return
      }
      // to is implicitly => home
      if (from.path === '/project') {
        this.animationName = 'up-fade'
        console.log(`if (from.path === '/project') {`)
        return
      }
      if (from.path === '/about') {
        this.animationName = 'down-fade'
        console.log(`if (from.path === '/about') {`)
        return
      }

    }
  },
  methods: {}

}
</script>
<style scoped>
.name:hover {
  cursor: pointer;
}

.up-fade-enter-active {
  transition: all 1s ease;
}

.up-fade-leave-active {
  transition: all 1s;
}

.up-fade-enter
  /* .up-fade-leave-active below version 2.1.8 */
{
  transform: translateY(-100vh);
  opacity: 0;

}

.up-fade-leave-to
  /* .up-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100vh);
  opacity: 0;
}

.down-fade-enter-active {
  transition: all 1s ease;
}

.down-fade-leave-active {
  transition: all 1s;
}

.down-fade-enter
  /* .down-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100vh);
  opacity: 0;

}

.down-fade-leave-to
  /* .down-fade-leave-active below version 2.1.8 */
{
  transform: translateY(-100vh);
  opacity: 0;
}

</style>