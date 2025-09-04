<script setup>
import { projects } from '@/assets/constants/projects'
</script>

<template>
  <div class="flex gap-4">
    <div class="flex gap-1  border-white">
      <h1 class="text-6xl text-white font-medium">Projects</h1>
      <sup>
        <span class="bg-red-500 text-white px-1 text-2xl">{{projects.length}}</span>
      </sup>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-black"
      >
        
        <!-- <div class="mb-2 aspect-video">
          <img
            :src="project.images[0]"
            :alt="`${project.title} main screenshot`"
            class="w-full h-full object-cover"
          />
        </div> -->
        <div class="mb-2 aspect-video relative group overflow-hidden rounded">
    <img
      :src="project.images[0]"
      :alt="`${project.title} main screenshot`"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"
    >
      <span class="text-white text-sm border border-white p-2 cursor-pointer">View Details</span>
    </div>
  </div>
        <h2 class="text-xl font-bold mb-2 text-white">{{ project.title }}</h2>
        <p class="text-gray-300 mb-2">{{ project.description }}</p>
        <!-- Add more project details here if needed -->
      </div>
    </div>
  </div>
</template>
