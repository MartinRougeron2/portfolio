<template>
  <q-page class="q-pa-md">
    <div class="row justify-center col-12 text-white">
      <div class="flex flex-center basic-text col-12 basic-text" style="font-size: 50px; color: darkblue">
        Projects
      </div>
      <q-carousel
          v-model="slide"
          swipeable
          transition-prev="jump-right"
          transition-next="jump-left"
          animated
          navigation
          control-color="white"
          infinite
          padding
          arrows
          height="70vh"
          class="text-white shadow-10 rounded-borders q-mt-lg"
          style="width: 50vw; margin-top: 80px; background-color: #3030b8"
      >
        <q-carousel-slide
            v-for="item in projects"
            :key="item.name"
            :name="item.name"
            class="column no-wrap flex-center q-pa-md"
        >
          <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap row justify-center">
            <q-img
                class="col-10 full-height row shadow-20"
                :src="item.image_url"
                style="width: 500px; height: 500px; transition: 0.8s; border-radius: 50px"
                :ratio="1/2"
                @mouseenter="l = item.name"
                @mouseleave="l = ''"
            >
              <transition name="slide-fade" mode="in-out">
                <div v-show="l === item.name" class="absolute-full row justify-center" style="background-color: #3030b8">
                  <div class="col-12 text-h4 flex flex-center">
                      Project
                  </div>
                  <div class="col-12 text-h2 flex flex-center">
                    {{ item.name }}
                  </div>
                  <q-separator style="width: 40vw" inset="item" color="white" size="2px" />
                  <div class="col-10 text-h5 flex flex-center">
                    Description
                  </div>
                  <div class="col-12 text-subtitle1 flex flex-center">
                    {{ item.description }}
                  </div>
                <q-btn
                    rounded
                    color="white"
                    class="col-6 shadow-4"
                    style="height: 50px"
                    @click="$router.push({path: '/project', query: {name: item.name}})"
                >
                  <q-icon name="arrow_downward" color="blue" />
                </q-btn>
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
  transform: translateY(60vh);
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

.neumorphic {
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.12),
  -12px -12px 24px 0 rgba(0, 0, 0, 0.12);
  font-size: 5rem;
  border-radius: 40px;
  overflow: hidden;
  padding: 1.3rem;
  display: flex;
}

.neumorphic--pressed {
  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
  inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
}

.variation1 {
  background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.2),
      rgba(255, 255, 255, 0.3)
  );
}

.variation1 span {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  padding: 0.65rem;
  box-shadow: inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
  inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);
}

.variation1 strong {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  background-color: #f13c20;
  color: white;
}

.variation1.pressed strong {
  background-color: #bb3c20;
}

.variation2 {
  justify-content: space-around;
  align-items: center;
}

.variation2 span {
  display: block;
  padding-bottom: 1.5rem;
  position: relative;
  font-size: 3rem;
}

.variation2 span::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  height: 0.3rem;
  border-radius: 1rem;
  width: 50%;
  margin: 0 auto;
  background-color: currentColor;
}

.variation2.pressed {
  color: #5ab9ea;
}

</style>
