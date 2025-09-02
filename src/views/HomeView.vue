<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div>
    <NavigationBar />
    <div class="flex items-start justify-center border-b border-white">
      <h1 class="text-8xl text-red-700 font-extrabold text-outline text-center">Olamide Olumomi</h1>
    </div>
  </div>
</template>

<style scoped>
.text-outline {
  text-shadow:
    -2px -2px 0 #fff,
    2px -2px 0 #fff,
    -2px 2px 0 #fff,
    2px 2px 0 #fff;
}
</style>
