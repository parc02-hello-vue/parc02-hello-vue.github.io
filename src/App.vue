<script setup>
import {ref, onUpdated, onMounted, onBeforeUpdate} from 'vue'
const count = ref(0)
    onUpdated(() => {
	    console.log(document.getElementById('count').textContent)
	    })
onMounted(() =>{
	console.log(`the componet is mounted`)
	})
</script>

<template>
<button id='count' @click="count=count+10">🦖{{count}}🦖</button>
</template>

