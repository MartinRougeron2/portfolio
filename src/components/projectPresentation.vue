<template>
  <div
    class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap row justify-center"
  >
    <q-img
      class="col-10 full-height row shadow-20 moving-object"
      :src="project.image_url"
      style="transition: 0.8s; border-radius: 50px"
      :ratio="1 / 2"
      @mouseenter="l = project.name"
      @mouseleave="l = ''"
    >
      <transition name="slide-fade" mode="in-out">
        <div
          v-show="l === project.name"
          class="absolute-full row justify-center"
          style="background-color: #3030b8"
        >
          <div class="col-12 text-h4 flex flex-center">
            Project
          </div>
          <div v-if="!$q.screen.xs" class="col-12 text-h3 flex flex-center">
            {{ project.name }}
          </div>
          <div v-else class="col-10 text-h5 flex flex-center">
            {{ project.name }}
          </div>
          <q-separator
            style="width: 100vw"
            inset="item"
            color="white"
            size="2px"
          />
          <div class="col-10 text-h5 flex flex-center">
            Description
          </div>
          <div class="col-12 text-subtitle1 flex flex-center">
            {{ project.description }}
          </div>
          <q-btn
            rounded
            color="white"
            class="col-6 shadow-4"
            style="height: 15%"
            text-color="secondary"
            @click="
              $router.push({ name: 'project', params: {project: project.name } })
            "
          >
            <div class="row justify-center">
              <p class="col-12 xs-hide">SHOW ME MORE</p>
              <q-icon name="arrow_downward" color="secondary" />
            </div>
          </q-btn>
        </div>
      </transition>
    </q-img>
  </div>
</template>

<script>
export default {
  name: "projectPresentation",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      l: ""
    };
  }
};
</script>

<style>
.moving-object {
  animation: moving 3s linear infinite;
}

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

@keyframes moving {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@-moz-keyframes moving {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@-webkit-keyframes moving {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@-o-keyframes moving {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>
