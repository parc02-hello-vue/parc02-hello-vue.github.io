<script setup>
import {ref, onMounted} from 'vue'

//reactive state
const count = ref({
count:0, 
name: "PA",
})
    
//function that mutate state and trigger updates 
function increment(){
count.value.count=count.value.count+100
    count.value.name=count.value.name+"HA"
}

//lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
	})
</script>

<template>
<button @click="increment">Count is: {{ count.count }} {{count.name}}</button>
</template>

<style scoped>
button {
    font-weight:bold;
}
</style>
