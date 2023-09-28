import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    toggleTodoComplete(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    }
  }
});
