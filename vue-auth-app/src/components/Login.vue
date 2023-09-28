<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const onLogin = () => {
  // Handle login logic
  // For simplicity, we'll just log the login
  console.log('Logged in:', { email: email.value });
  // Redirect to dashboard or another appropriate page
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onLogin">
      <input type="email" v-model="email" placeholder="Email" /><br />
      <input type="password" v-model="password" placeholder="Password" /><br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

