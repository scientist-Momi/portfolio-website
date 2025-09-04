<script setup>
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import MailIcon from '@/assets/icons/email.svg'
</script>

<template>
  <div class="flex items-center justify-between py-5 sticky top-0 bg-black z-10">
    <div class="flex items-center gap-2">
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
    <div>
      <div class="p-1 border border-white text-white font-bold flex items-center">
        <h1 class="text-red-700">O</h1>
        <h1 class="text-white">.</h1>
        <h1 class="text-red-700">O</h1>
      </div>
    </div>
    <div class="">
      <a
        href="/public/OlamideOlumomi.pdf"
        target="_blank"
        rel="noopener"
        class="p-2 text-sm border border-red-700 text-white cursor-pointer hover:bg-red-700"
      >
        Download Resume
      </a>
    </div>
  </div>
</template>
