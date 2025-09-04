<script setup>
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import MailIcon from '@/assets/icons/email.svg'
</script>

<template>
  <footer
    class="w-full mt-12 py-6 bg-black border-t border-gray-800 flex flex-col md:flex-row items-center justify-between px-4 gap-2"
  >
    <p class="text-gray-400 text-sm text-center">
      &copy; {{ new Date().getFullYear() }} Olamide Olumomi. All rights reserved.
    </p>
    <div class="flex gap-3">
      <a
        href="https://github.com/scientist-Momi"
        target="_blank"
        class="text-gray-400 hover:text-white transition"
      >
        <GithubIcon class="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/momiolamide/"
        target="_blank"
        class="text-gray-400 hover:text-white transition"
      >
        <LinkedinIcon class="w-6 h-6" />
      </a>
      <a
        href="mailto:momi.official33@outlook.com"
        class="text-gray-400 hover:text-white transition"
      >
        <MailIcon
          class="w-6 h-6"
        />
      </a>
    </div>
  </footer>
</template>
