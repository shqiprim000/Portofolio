// store/dataStore.ts
import { defineStore } from 'pinia'

export const useDataStore = defineStore('myStore', {
    state: () => ({
        count: 0,
        user: null
    }),
    getters: {
        // Add computed properties here if needed
    },
    actions: {
        // Define methods to modify the state here if needed
    }
})
