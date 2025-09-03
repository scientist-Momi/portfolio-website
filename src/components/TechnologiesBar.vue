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
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <JavaIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">Java</small>
    </div>
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <PythonIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">Python</small>
    </div>
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <JavascriptIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">Javascripr</small>
    </div>
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <VueIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">VueJS</small>
    </div>
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <LaravelIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">Laravel</small>
    </div>
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <PhpIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">PHP</small>
    </div>
    <div class="flex flex-col items-center mx-2 gap-0.5">
      <SpringIcon
        width="65"
        height="65"
        class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
      />
      <small class="text-white">Spring Boot</small>
    </div>
  </div>
</template>

<style scoped></style>
