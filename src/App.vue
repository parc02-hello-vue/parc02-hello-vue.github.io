<script setup>
import {ref} from 'vue'
import book from "@/assets/book.json"

const books = ref(book);
</script>

<template>
    <div>
	<ul>
	<h1>Title-Author-Year</h1>
	    <li v-for="(book) in books">
{{ book.title}}-{{ book.author }}-{{ book.year }}
	    </li>
	</ul>
    </div>
</template>


