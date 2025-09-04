<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import TechnologiesBar from '@/components/TechnologiesBar.vue'
import ProjectsBar from '@/components/ProjectsBar.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div>
    <NavigationBar />
    <div class="flex flex-col items-center justify-center py-8 md:py-15 px-2">
      <div>
        <h1 class="text-6xl md:text-8xl text-white font-extrabold text-center">Olamide Olumomi</h1>
        <p class="mt-4 text-base md:text-lg text-gray-400 text-center">
          Computer Science & Artificial Intelligence Enthusiast passionate about building intelligent
          solutions.
        </p>
        <ul class="mt-4 text-xs md:text-sm text-gray-300 flex gap-1 flex-wrap justify-center">
          <li class="border border-gray-500 p-1">Machine Learning Engineer</li>
          <li class="border border-gray-500 p-1">Data Scientist</li>
          <li class="border border-gray-500 p-1">Software Developer</li>
          <li class="border border-gray-500 p-1">AI Research Assistant</li>
          <li class="border border-gray-500 p-1">Backend Developer</li>
        </ul>
        <TechnologiesBar class="mt-8 md:mt-10" />
      </div>
    </div>
    <div class="border-white mt-10">
      <ProjectsBar />
    </div>
    <FooterBar />
    <ProjectModal />
  </div>
</template>
