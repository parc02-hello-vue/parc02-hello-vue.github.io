<script setup>
import { ref } from 'vue'

const message = ref({name:"PMS", age:23})
</script>

<template>
<h1>{{message}}</h1>
</template>
