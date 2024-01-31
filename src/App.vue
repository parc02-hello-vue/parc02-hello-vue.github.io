<script setup>
import {ref} from 'vue'
import category from "@/assets/category.json"

const categories = ref(category);
</script>

<template>
    <div>
	<ul>
	    <li v-for="category in categories" :key="category.code">
		<span>{{ category.name }}</span>
		<span>{{ category.code }}</span>
	    </li>
	</ul>
    </div>
</template>


