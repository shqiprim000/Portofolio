<script setup lang="ts">
import { ref } from 'vue';
import { useDataStore } from '~/store/dataStore';
import AboutPage from "~/pages/AboutPage.vue";

const dataStore = useDataStore();

const about = ref<HTMLElement | null>(null);
const home = ref<HTMLElement | null>(null);

const scrollToElement = (section :string) => {

  console.log(section)

  // const element = document.getElementById(section);
  // if (element) {
  //   element.scrollIntoView({ behavior: 'smooth' });
  // }
};
</script>

<template>
  <div class="nav-bar">
    <navbar @scrollToSection="scrollToElement"></navbar>
  </div>
  <div id="home">
    <introduction></introduction>
  </div>
  <div class="main__container-content">
    <div id="about">
      <aboutMe></aboutMe>
    </div>
    <div id="resume">
      <Resume></Resume>
    </div> 
  </div> 
      <div id="contact">
    <contact></contact>
  </div>

</template>

<style scoped>
.nav-bar {
  position: fixed;
  right: 10px;
  top: 30%;
}

.main__container-content{
  padding: 16px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1040px){
    padding: 3rem 8rem;
  }

}
</style>
