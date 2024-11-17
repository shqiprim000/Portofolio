<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between h-screen">
    <!-- Left Side: Presentation -->
    <div class="flex-1 w-full lg:w-1/2 flex flex-col justify-center h-full ml-4 lg:ml-14">
      <div class="presentation">
        <div class="introduction_title">
          <h2 class="text-4xl lg:text-6xl font-bold font-roboto">Hi There!</h2>
          <h2 class="text-5xl lg:text-7xl font-bold mt-2 font-lora">I'M <span class="text-yellow-500">SHQIPRIM</span></h2>
        </div>
        <div class="what_i_do mt-4 bg-yellow-500 p-2 w-[300px] font-poppins font-bold text-lg rounded">
          FULL-STACK WEB DEVELOPER
        </div>
        <div class="description mt-4 text-gray-400">
          I’m an aspiring web developer with a growing skill set in Vue.js and Laravel. Driven by a
          passion for creating engaging web applications, I’m eager to tackle new challenges and continuously learn.
          Check out my portfolio to see how I’m applying my skills to bring ideas to life.
        </div>
        <div class="button mt-4">
          <button class="bg-yellow-500 text-white py-2 px-4 rounded font-bold">
            MORE ABOUT ME
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side: Image -->
    <div class=" image_container flex-1 w-full lg:w-1/2 flex items-center justify-center h-full mt-6 lg:mt-0">
      <div class="image bg-black h-60 w-full lg:h-full">
        <!-- Image or content here -->
      </div>
    </div>
  </div>
</template>
.

<style scoped>
.image_container{
  display: none;

  @media screen and (min-width: 1024px){

    display: block;
  }
}
</style>
