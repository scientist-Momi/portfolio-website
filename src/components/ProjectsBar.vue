<script setup>
import { projects } from '@/assets/constants/projects'
import PythonIcon from '@/assets/icons/python.svg'
import JavascriptIcon from '@/assets/icons/javascript.svg'
import VueIcon from '@/assets/icons/vuejs.svg'
import LaravelIcon from '@/assets/icons/laravel.svg'
import PhpIcon from '@/assets/icons/php.svg'
import SpringIcon from '@/assets/icons/fruhlingsstiefel.svg'
import JavaIcon from '@/assets/icons/java.svg'
import { useModalStore } from '@/stores/modalStore'

const techIcons = {
  'python.svg': PythonIcon,
  'javascript.svg': JavascriptIcon,
  'vuejs.svg': VueIcon,
  'laravel.svg': LaravelIcon,
  'php.svg': PhpIcon,
  'fruhlingsstiefel.svg': SpringIcon,
  'java.svg': JavaIcon,
}

const modal = useModalStore()
</script>

<template>
  <div class="flex gap-4">
    <div class="flex gap-1 border-white">
      <h1 class="text-6xl text-white font-medium">Projects</h1>
      <sup>
        <span class="bg-red-500 text-white px-1 text-2xl">{{ projects.length }}</span>
      </sup>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="project in projects" :key="project.id" class="bg-black">
        <div class="mb-2 aspect-video relative group overflow-hidden rounded">
          <img
            :src="project.images[0]"
            :alt="`${project.title} main screenshot`"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          >
            <span
              @click="modal.open(project)"
              class="text-white text-sm border border-white p-2 cursor-pointer"
              >View Details</span
            >
          </div>
        </div>
        <div class="flex gap-2 my-4">
          <component
            v-for="tech in project.technologies"
            :key="tech.name"
            :is="techIcons[tech.icon]"
            :title="tech.name"
            class="w-8 h-8"
          />
        </div>
        <h2 class="text-xl font-bold mb-2 text-white">{{ project.title }}</h2>
        <p class="text-gray-300 mb-2">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
