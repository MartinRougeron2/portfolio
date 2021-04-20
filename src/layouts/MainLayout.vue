<template>
  <q-layout view="hHh lpR fFf">

    <q-header style="background-color: #fdfdfd" class="text-black">
      <div class="q-mt-md row justify-between">
        <div class="col-4">
          <div class="q-ml-xl name basic-text" style="font-size: 15px" @click="$router.push('/')">
            MARTIN ROUGERON
          </div>
        </div>
        <div class="col-8 row justify-end">
          <q-btn
              flat
              color="secondary"
              style="background-color: transparent"
              class="q-mx-xl button"
          >
            RÉSEAUX
          </q-btn>
          <q-btn
              flat
              color="secondary"
              style="background-color: transparent"
              class="q-mx-xl button"
              to="about"
          >
            ABOUT
          </q-btn>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view/>
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
</style>