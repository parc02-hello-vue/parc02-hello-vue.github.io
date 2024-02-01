<script setup>
import {reactive, computed, ref} from 'vue'

const author = ref({
name:'John Doe',
books: [1,2,3] 
})

const check = computed(() => {
	return author.value.books.length >2 ? 'Yes' : 'No'
	})
</script>



<template>
<p>🤠🤓🐲🦖:</p>
<span>{{author.books.length>2?'Yes':'No'}}</span>
<div>computed⬇️:</div>
<div>{{check}}</div>
</template>

