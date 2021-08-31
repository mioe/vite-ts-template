import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: (): any => ({
    name: '',
    hello: 'hello',
  }),
  getters: {
    greetings(): string { return `${this.hello} ${this.name}` },
  },
  actions: {
    changeName(newName: string): void {
      this.name = newName
    },
  },
})
