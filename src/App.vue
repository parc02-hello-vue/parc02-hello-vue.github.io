<script setup>
import {ref} from 'vue'
import book from "@/assets/book.json"

const books = ref(book);
</script>

<template>
    <div>
	<ul>
	<h1>Title-Author-Language-Pages-Year</h1>
	    <template v-for="(book) in books">
	    <li v-if="book.year>1500">
{{ book.title}}-{{ book.author }}-{{ book.language}}-{{book.pages}}-{{book.year}}
</li>
</template>
	</ul>
    </div>
</template>


