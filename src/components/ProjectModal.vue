<script setup>
import { ref, computed, watch } from 'vue'
import { useModalStore } from '@/stores/modalStore'
import PythonIcon from '@/assets/icons/python.svg'
import JavascriptIcon from '@/assets/icons/javascript.svg'
import VueIcon from '@/assets/icons/vuejs.svg'
import LaravelIcon from '@/assets/icons/laravel.svg'
import PhpIcon from '@/assets/icons/php.svg'
import SpringIcon from '@/assets/icons/spring.svg'
import JavaIcon from '@/assets/icons/java.svg'
import GithubIcon from '@/assets/icons/github.svg'
import InternetIcon from '@/assets/icons/internet.svg'
import MySQLIcon from '@/assets/icons/mysql.svg'
import TailwindCSSIcon from '@/assets/icons/tailwind-css.svg'

const modal = useModalStore()
const project = computed(() => modal.data)

function close() {
  modal.close()
}

const selectedImage = ref(null)

watch(project, (newProject) => {
  if (newProject && newProject.images && newProject.images.length > 0) {
    selectedImage.value = newProject.images[0]
  } else {
    selectedImage.value = null
  }
})

const techIcons = {
  'python.svg': PythonIcon,
  'javascript.svg': JavascriptIcon,
  'vuejs.svg': VueIcon,
  'laravel.svg': LaravelIcon,
  'php.svg': PhpIcon,
  'spring.svg': SpringIcon,
  'java.svg': JavaIcon,
    'mysql.svg': MySQLIcon,
  'tailwindcss.svg': TailwindCSSIcon
}
</script>

<template>
  <div v-if="modal.isOpen">
    <div
      @click="close"
      class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm"
    >
        <Transition name="slide-up-modal">
          <div
            v-show="modal.isOpen"
            class="bg-black border border-gray-700 rounded shadow-lg w-[98vw] max-w-8xl max-h-[90vh] h-fit mt-[5vh] flex flex-col p-2 sm:p-4"
            @click.stop
          >
          <div class="overflow-y-auto flex-1">
            <div class="px-4 pt-2 text-base font-semibold flex justify-end items-center sticky top-0 bg-black">
              <button
                class="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
                @click="modal.close()"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div class="overflow-y-hidden flex-1">
              <div class="p-2 sm:p-6" v-if="project">
                <div class="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center">
                  <div
                    v-if="project.images && project.images.length"
                    class="flex flex-col items-center w-full lg:w-[60%]"
                  >
                    <div class="w-full flex justify-center mb-4">
                      <img
                        :src="selectedImage"
                        alt="Project main"
                        class="max-h-60 sm:max-h-160 object-contain bg-gray-800 w-full max-w-xs sm:max-w-md"
                        style="max-width: 100%"
                      />
                    </div>
                    <div class="flex gap-2 justify-center flex-wrap">
                      <img
                        v-for="(img, idx) in project.images"
                        :key="idx"
                        :src="img"
                        alt="Project thumbnail"
                        class="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded cursor-pointer border-2"
                        :class="selectedImage === img ? 'border-red-500' : 'border-gray-700'"
                        @click.stop="selectedImage = img"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-[40%] self-start">
                    <p class="text-white text-xl sm:text-2xl font-bold">
                      {{ project.title }}
                    </p>
                    <p class="text-gray-400 mt-2 text-sm sm:text-base">
                      {{ project.description }}
                    </p>
                    <div class="flex gap-2 mt-6 flex-wrap">
                      <component
                        v-for="tech in project.technologies"
                        :key="tech.name"
                        :is="techIcons[tech.icon]"
                        :title="tech.name"
                        class="w-7 h-7 sm:w-8 sm:h-8"
                      />
                    </div>
                    <div class="flex gap-4 mt-6 flex-wrap">
                      <a
                        v-if="project.link"
                        :href="project.link"
                        target="_blank"
                        class="border border-gray-500 p-2 text-white hover:bg-gray-800 text-xs sm:text-sm flex items-center gap-2"
                      >
                        <GithubIcon width="20" height="20" />
                        Source Code</a
                      >
                      <a
                        v-if="project.demo"
                        :href="project.demo"
                        target="_blank"
                        class="border border-gray-500 p-2 text-white hover:bg-gray-800 text-xs sm:text-sm flex items-center gap-2"
                      >
                        <InternetIcon width="20" height="20" />
                        Live Demo</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>nothing</div>
            </div>
            </div>
          </div>
        </Transition>
    </div>
  </div>
</template>

<style scoped>
/* Transition classes */
.slide-up-modal-enter-active,
.slide-up-modal-leave-active {
  transition: all 0.4s ease;
}

.slide-up-modal-enter-from,
.slide-up-modal-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-modal-enter-to,
.slide-up-modal-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-modal-enter-active {
  outline: 2px solid red;
}
</style>
