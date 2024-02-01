<script setup>
import {ref, onUpdated, onMounted, onBeforeUpdate} from 'vue'
const count = ref(0)
    onUpdated(() => {
	    console.log(document.getElementById('count').textContent)
	    })
onMounted(() =>{
	console.log(document.getElementById('count').textContent,`the componet is mounted`)
	})
onBeforeUpdate(() => {
	console.log(document.getElementById('count').textContent+`🦖🦖🦖🦖🦖`)
	})
</script>

<template>
<button id='count' @click="count=(count++)+'ha'">🦖{{count}}🦖</button>
</template>

