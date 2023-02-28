<template>
  <div>
    <ul class="todo-list">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <div class="todo-name">
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="triggerToggleCompleted(index)"
          />
          <span class="todo-text">{{ todo.text }}</span>
        </div>
        <div class="todo-action">
          <button @click="removeTodo(index)">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
    },
  },
  methods: {
    removeTodo(i) {
      this.$emit("removeTodo", i);
    },
    triggerToggleCompleted(i) {
      this.$emit("toggleCompleted", i);
    },
  },
};
</script>

<style>
.todo-list {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  font-family: sans-serif;
}
.todo-name {
  margin-right: 10px;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.todo-item.completed {
  opacity: 0.5;
}
</style>
