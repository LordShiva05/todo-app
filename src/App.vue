<template>
  <div id="todo-app">
    <AddTodos @addTodo="addTodo"></AddTodos>
    <draggable v-model="todoList" @end="onDragEnd">
      <TodosList @removeTodo="removeTodo" @toggleCompleted="toggleCompleted" :todos="todoList"></TodosList>
    </draggable>
  </div>
</template>

<script>
import AddTodos from './components/AddTodos.vue';
import TodosList from './components/TodosList.vue';


export default {
  name: 'TodoApp',
  data(){
    return {
      todoList: [],
    }
  },
  components: {
    AddTodos,
    TodosList,
  },
  methods: {
    addTodo(e){
      this.todoList.push({text: e, completed: false});
    },
    removeTodo(e){
      this.todoList.splice(e, 1);
    },
    onDragEnd(e) {
      this.todoList.splice(e.newIndex, 0, this.todoList.splice(e.oldIndex, 1)[0]);
    },
    toggleCompleted(e) {
      let updatedTodoList = [...this.todoList];
      updatedTodoList[e].completed = !updatedTodoList[e].completed;
      this.todoList = updatedTodoList;
    }
  }
}
</script>

<style>
#todo-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
