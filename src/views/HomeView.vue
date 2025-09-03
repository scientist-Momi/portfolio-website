<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import TechnologiesBar from '@/components/TechnologiesBar.vue'
</script>

<!-- <template>
  <div>
    <NavigationBar />
    <div class="flex items-start justify-center max-h-[50%]  border-white">
      <div class="mt-15">
        <h1 class="text-8xl text-white font-extrabold text-center">Olamide Olumomi</h1>
        <ul class="mt-4 text-base text-gray-300 flex gap-1">
          <li class="border border-gray-500 p-1">Machine Learning Engineer</li>
          <li class="border border-gray-500 p-1">Data Scientist</li>
          <li class="border border-gray-500 p-1">Software Developer</li>
          <li class="border border-gray-500 p-1">AI Research Assistant</li>
          <li class="border border-gray-500 p-1">Backend Developer</li>
        </ul>
        <TechnologiesBar class="mt-5" />
      </div>
    </div>
  </div>
</template> -->

<template>
  <div>
    <NavigationBar />
    <div class="flex flex-col items-center justify-center border border-white">
      <div>
        <h1 class="text-8xl text-white font-extrabold text-center">Olamide Olumomi</h1>
        <p class="mt-4 text-xl text-gray-400 text-center">
  Computer Science & Artificial Intelligence Student passionate about building intelligent solutions.
</p>
        <ul class="mt-4 text-base text-gray-300 flex gap-1 flex-wrap justify-center">
          <li class="border border-gray-500 p-1">Machine Learning Engineer</li>
          <li class="border border-gray-500 p-1">Data Scientist</li>
          <li class="border border-gray-500 p-1">Software Developer</li>
          <li class="border border-gray-500 p-1">AI Research Assistant</li>
          <li class="border border-gray-500 p-1">Backend Developer</li>
        </ul>
        <TechnologiesBar class="mt-5" />
      </div>
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
