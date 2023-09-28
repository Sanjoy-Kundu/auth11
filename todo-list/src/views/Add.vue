<template>
    <div>
      <input v-model="newTodo" placeholder="Enter a new todo" @keyup.enter="addTodo" />
      <button @click="addTodo">Add</button>
  
      <div v-if="todos.length > 0">
        <div v-for="todo in todos" :key="todo.id" class="todo-item">
          <input type="checkbox" v-model="todo.completed" @change="toggleTodoComplete(todo)" />
          <div :style="{ 'text-decoration': todo.completed ? 'underline' : 'none' }">{{ todo.text }}</div>
          <button @click="deleteTodo(todo.id)">Delete</button> <!-- Added delete button -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useStore } from '../store'
  
  const store = useStore()
  const newTodo = ref('')
  const todos = store.todos
  
  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      store.addTodo({
        id: Date.now(),
        text: newTodo.value,
        completed: false
      });
      newTodo.value = ''; // Clear the input field
    }
  }
  
  const deleteTodo = (id) => {
    store.deleteTodo(id);
  }
  
  const toggleTodoComplete = (todo) => {
    store.toggleTodoComplete(todo.id);
  }
  </script>
  