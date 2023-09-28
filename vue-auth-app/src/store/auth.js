import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => state.loggedIn,
  },

  actions: {
    login(email, password) {
      // Authenticate the user here (e.g., check credentials with a backend)
      // For simplicity, we'll just set loggedIn and user
      this.loggedIn = true;
      this.user = { email };
    },

    register(email, password) {
      // Register the user here (e.g., send registration data to a backend)
      // For simplicity, we'll just set loggedIn and user
      this.loggedIn = true;
      this.user = { email };
    },

    logout() {
      this.loggedIn = false;
      this.user = null;
    },
  },
});