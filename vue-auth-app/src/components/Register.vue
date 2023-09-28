<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="onRegister">
      <input type="email" v-model="email" placeholder="Email" /><br />
      <input type="password" v-model="password" placeholder="Password" /><br />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" /><br />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const onRegister = () => {
  if (password === confirmPassword) {
    // Handle registration logic
    // For simplicity, we'll just log the registration
    console.log('Registered:', { email: email.value, password: password.value });
    // Redirect to dashboard or another appropriate page
  } else {
    alert('Passwords do not match.');
  }
};
</script>