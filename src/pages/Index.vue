<template>
  <q-page class="q-pa-md" style="background-color: #8e8e8e">
    <div class="row justify-center col-12 text-white">
      <div class="flex flex-center basic-text col-12 basic-text" style="font-size: 50px">
        Projects
      </div>
      <q-carousel
          v-model="slide"
          swipeable
          transition-prev="jump-right"
          transition-next="jump-left"
          animated
          navigation
          infinite
          padding
          arrows
          height="70vh"
          class="bg-grey-6 text-white shadow-10 rounded-borders q-mt-lg"
          style="width: 50vw; margin-top: 80px"
      >
        <q-carousel-slide
            v-for="item in projects"
            :key="item.name"
            :name="item.name"
            class="column no-wrap flex-center"
        >
          <div
              @click="$router.push({path: '/project', query: {name: item.name}})"
              style="cursor: pointer"
              :title="item.name"
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap row justify-center">
            <q-img
                class="rounded-borders col-10 full-height row shadow-10"
                :src="item.image_url"
                style="width: 500px; height: 500px; transition: 0.8s"
                :ratio="1/2"
                @mouseenter="l = item.name"
                @mouseleave="l = ''"
            >
              <transition name="slide-fade" mode="in-out">
                <div v-show="l === item.name" class="absolute-full row justify-center">
                  <div class="col-12 text-h4 flex flex-center">
                    {{ item.name }}
                  </div>
                  <div class="text-subtitle1">
                    {{ item.description }}
                  </div>
                </div>
              </transition>
            </q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>

    </div>
  </q-page>
</template>

<script>

import { projects } from '../constants/projectsList.js'

export default {
  name: 'PageIndex',
  data() {
    return {
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      slide: 'my_RPG',
      projects: projects,
      l: ''
    }
  }
}
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
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
  transition: all 0.4s ease;
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
