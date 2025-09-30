<script setup>
import { projects } from '@/assets/constants/projects'
import PythonIcon from '@/assets/icons/python.svg'
import JavascriptIcon from '@/assets/icons/javascript.svg'
import VueIcon from '@/assets/icons/vuejs.svg'
import LaravelIcon from '@/assets/icons/laravel.svg'
import PhpIcon from '@/assets/icons/php.svg'
import SpringIcon from '@/assets/icons/spring.svg'
import JavaIcon from '@/assets/icons/java.svg'
import MySQLIcon from '@/assets/icons/mysql.svg'
import TailwindCSSIcon from '@/assets/icons/tailwind-css.svg'
import PostgresIcon from '@/assets/icons/postgresql.svg'
import { useModalStore } from '@/stores/modalStore'

const techIcons = {
  'python.svg': PythonIcon,
  'javascript.svg': JavascriptIcon,
  'vuejs.svg': VueIcon,
  'laravel.svg': LaravelIcon,
  'php.svg': PhpIcon,
  'spring.svg': SpringIcon,
  'java.svg': JavaIcon,
  'mysql.svg': MySQLIcon,
  'tailwindcss.svg': TailwindCSSIcon,
    'postgresql.svg' : PostgresIcon
}

const modal = useModalStore()
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4 px-2">
    <div class="flex gap-1 border-white mb-6">
      <h1 class="text-4xl md:text-6xl text-white font-medium">Projects</h1>
      <sup>
        <span class="bg-red-500 text-white px-1 text-lg md:text-2xl">{{ projects.length }}</span>
      </sup>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-y-8 w-full">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-black border border-gray-700 p-4 flex flex-col"
      >
        <div class="mb-2 aspect-video relative group overflow-hidden">
          <img
            :src="project.images[0]"
            :alt="`${project.title} main screenshot`"
            class="w-full h-full object-cover"
          />
          <div
            class="hidden md:flex absolute inset-0 bg-black bg-opacity-70 items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          >
            <span
              @click="modal.open(project)"
              class="text-white text-sm border border-white p-2 cursor-pointer"
              >View Details</span
            >
          </div>
        </div>
        <div class="flex gap-2 my-4 flex-wrap">
          <component
            v-for="tech in project.technologies"
            :key="tech.name"
            :is="techIcons[tech.icon]"
            :title="tech.name"
            class="w-7 h-7 md:w-8 md:h-8"
          />
        </div>
        <h2 class="text-lg md:text-xl font-bold mb-2 text-white">{{ project.title }}</h2>
        <p class="text-gray-300 mb-2 text-xs md:text-base">
          {{
            project.description.length > 150
              ? project.description.slice(0, 150) + '...'
              : project.description
          }}
        </p>
        <span
          @click="modal.open(project)"
          class="block md:hidden text-white text-xs border border-gray-500 p-2 cursor-pointer w-max"
          >View Details</span
        >
      </div>
    </div>
  </div>
</template>
