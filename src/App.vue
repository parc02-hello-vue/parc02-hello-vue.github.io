<script setup>
import {ref} from 'vue'

let id = 0
const newTodo = ref('')
const todos = ref([
	{id: id++, issue: 'BackLog' },
	{id: id++, issue: 'Todo' },
	{id: id++, issue: 'Going To Hawaii' }
])

// 할 일 추가 함수
const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.value.trim() !== '') {
        // 새로운 할 일을 기존 할 일 배열에 추가하여 새 배열을 생성
        todos.value = [...todos.value, { id: id++, issue: newTodo.value }]
        newTodo.value = ''
    }
}

// 할 일 삭제 함수
const removeTodo = (todo) => {
    todos.value = todos.value.filter(item => item.id !== todo.id)
}

</script>

<template>
<form @submit="addTodo">
 <input v-model="newTodo">
<button>할 일 추가</button>
</form>
<ul>
<li v-for="todo in todos">
{{todo.id}}-{{todo.issue}}-<button @click="removeTodo(todo)">Done</button>
</li>
</ul>
</template>

