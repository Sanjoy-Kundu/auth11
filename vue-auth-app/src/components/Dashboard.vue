<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogout = () => {
  console.log('Logged out');
  router.push('/login');
};
</script>


<template>
    <div>
      <h2>Dashboard</h2>
      <button @click="onLogout">Logout</button>
    </div>
  </template>
  
 