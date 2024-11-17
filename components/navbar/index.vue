<script setup lang="ts">




</script>

<template>
  <div class="navbar-container border-yellow-400 bg-amber-400 p-[4px]">
    <ul class="nav-items flex flex-col items-center space-y-4 gap-6">
      <li class="text-xl "  @click="$emit('scrollToSection','home')" >
        <icons-home />
      </li>
      <li class="text-xl "  @click="$emit('scrollToSection','about')">
        <icons-person />
      </li>
      <li class="text-xl"  @click="$emit('scrollToSection','resume')">
        <icons-computer />
      </li>
      <li class="text-xl">
        <icons-plain />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 20px;
}

.navbar-container li {
  cursor: pointer;

  :hover{
    color: white;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
}
</style>
