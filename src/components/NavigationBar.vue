<script setup>
import { ref } from 'vue'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import MailIcon from '@/assets/icons/email.svg'

const menuOpen = ref(false)
</script>

<template>
  <div class="flex items-center justify-between py-5 px-2 sticky top-0 bg-black z-10">
    <div class="hidden md:flex items-center gap-2 flex-1">
      <a href="https://github.com/scientist-Momi" target="_blank">
        <GithubIcon
          width="28"
          height="28"
          class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
      </a>
      <a href="https://www.linkedin.com/in/momiolamide/" target="_blank">
        <LinkedinIcon
          width="28"
          height="28"
          class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
      </a>
      <a href="mailto:momi.official33@outlook.com" target="_blank">
        <MailIcon
          width="28"
          height="28"
          class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
        />
      </a>
    </div>

    <div class="flex-1 flex justify-start md:justify-center">
      <div class="p-1 border border-white text-white font-bold flex items-center">
        <h1 class="text-red-700">O</h1>
        <h1 class="text-white">.</h1>
        <h1 class="text-red-700">O</h1>
      </div>
    </div>

    <div class="flex-1 flex justify-end items-center gap-2">
      <button
        class="md:hidden p-2 ml-2 text-white focus:outline-none"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <a
        href="OlamideOlumomi.pdf"
        target="_blank"
        rel="noopener"
        class="hidden md:inline-block p-2 text-sm border border-red-700 text-white cursor-pointer hover:bg-red-700"
      >
        Download Resume
      </a>
    </div>
    <div
      id="mobile-menu"
      class="w-full bg-black z-20 p-4 absolute top-16 left-0 flex flex-col gap-4 justify-center items-center md:hidden"
      v-if="menuOpen"
    >
      <div class="flex items-center gap-2">
        <a href="https://github.com/scientist-Momi" target="_blank" @click="menuOpen = false">
          <GithubIcon
            width="28"
            height="28"
            class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/momiolamide/"
          target="_blank"
          @click="menuOpen = false"
        >
          <LinkedinIcon
            width="28"
            height="28"
            class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
          />
        </a>
        <a href="mailto:momi.official33@outlook.com" target="_blank" @click="menuOpen = false">
          <MailIcon
            width="28"
            height="28"
            class="p-1 border border-gray-500 cursor-pointer hover:bg-gray-800"
          />
        </a>
      </div>
      <a
        href="OlamideOlumomi.pdf"
        target="_blank"
        rel="noopener"
        class="p-2 text-sm border border-red-700 text-white cursor-pointer hover:bg-red-700"
        @click="menuOpen = false"
      >
        Download Resume
      </a>
    </div>
  </div>
</template>
