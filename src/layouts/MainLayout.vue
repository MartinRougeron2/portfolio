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

    <q-page-container>
      <transition
          name="slide-fade"
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

.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100px);
  opacity: 0;
}


.search-section-fade {
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}

.slide-fade-new-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-new-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-new-enter, .slide-fade-new-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateY(100px);
  opacity: 0;
}

.results_search {
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>