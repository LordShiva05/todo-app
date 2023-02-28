<template>
  <div>
    <input v-model="todoText" placeholder="Add a new todo item" />
    <button @click="addTodo">Add Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("addTodo", this.todoText);
      this.todoText = "";
    },
  },
};
</script>
