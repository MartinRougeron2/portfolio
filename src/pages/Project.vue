<template>
  <q-page class="q-pa-md">
    <div class="go-to-top">
      <q-btn class="bg-dark" round to="/">
        <q-icon name="expand_less" />
      </q-btn>
    </div>
    <div class="row justify-center">
      <q-img
        class="rounded-borders col-10 full-height row shadow-10"
        :src="project.image_url"
        style="max-width: 70vw; transition: 0.8s"
        :ratio="2"
      >
        <div
          class="flex flex-center basic-text col-9 text-white absolute-bottom "
          style="font-size: min(50px, 3vw);"
        >
          Project {{ project.name }}
        </div>
      </q-img>
    </div>
    <div class="xs-hide sm-hide">
      <div
        class="row justify-start q-pl-xl-xl q-pa-md"
        style="font-size: min(20px, 4vw)"
      >
        <div class="col-7 text-justify">
          <div class="q-pa-md">
            {{ project.text1 }}
          </div>
        </div>
        <div class="flex flex-center q-ml-xl text-h2">
          Project Goal
        </div>
      </div>
      <div
        class="row justify-end q-pl-xl-xl q-pa-md"
        style="font-size: min(20px, 4vw)"
      >
        <div class="flex flex-center q-mr-xl text-h2">
          Achievements
        </div>
        <div class="col-7 text-justify">
          <div class="q-pa-md">
            {{ project.text2 }}
          </div>
        </div>
      </div>
    </div>
    <div class="md-hide lg-hide xl-hide">
      <div
        class="row justify-center q-pl-xl-xl q-pa-md"
        style="font-size: min(20px, 4vw)"
      >
        <div class="flex flex-center col-10 q-mt-lg text-h3">
          Project Goal
        </div>
        <div class="col-10 text-justify">
          <div class="q-pa-md">
            {{ project.text1 }}
          </div>
        </div>
      </div>
      <div
        class="row justify-center q-pl-xl-xl q-pa-md"
        style="font-size: min(20px, 4vw)"
      >
        <div class="flex flex-center col-10 q-mt-lg text-h3">
          Achievements
        </div>
        <div class="col-10 text-justify">
          <div class="q-pa-md">
            {{ project.text2 }}
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div
        v-for="(feature, index) in project.features"
        :key="index"
        class="q-ma-md col-8"
      >
        <div class="text-h5 q-py-lg"> 
          {{ feature.text }}
        </div>
        <q-img :src="feature.image_url"> </q-img>
      </div>
    </div>
  </q-page>
</template>

<script>
import { projects } from "../constants/projectsList";

export default {
  name: "Project",
  data() {
    return {
      project: {}
    };
  },
  created() {
    projects.forEach(project => {
      if (project.name === this.$route.query?.name) {
        this.project = project;
      }
    });
  }
};
</script>
<style>
.go-to-top {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
</style>
