import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    data: null,
  }),
  actions: {
    open(data) {
      this.data = data
      this.isOpen = true
    },
    close() {
      this.data = null
      this.isOpen = false
    },
  },
})
