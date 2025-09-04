<script setup>
import PythonIcon from '@/assets/icons/python.svg'
import JavascriptIcon from '@/assets/icons/javascript.svg'
import VueIcon from '@/assets/icons/vuejs.svg'
import LaravelIcon from '@/assets/icons/laravel.svg'
import PhpIcon from '@/assets/icons/php.svg'
import SpringIcon from '@/assets/icons/fruhlingsstiefel.svg'
import JavaIcon from '@/assets/icons/java.svg'
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-gray-500">Technologies:</p>
    <div class="flex flex-wrap items-center justify-center mt-2 gap-4">
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <JavaIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">Java</small>
      </div>
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <PythonIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">Python</small>
      </div>
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <JavascriptIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">Javascript</small>
      </div>
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <VueIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">VueJS</small>
      </div>
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <LaravelIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">Laravel</small>
      </div>
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <PhpIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">PHP</small>
      </div>
      <div class="flex flex-col items-center mx-2 gap-0.5">
        <SpringIcon
          class="w-12 h-12 md:w-16 md:h-16 p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
        <small class="text-white">Spring Boot</small>
      </div>
    </div>
  </div>
</template>
