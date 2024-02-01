<script setup>
const props = defineProps({
pocketMoney: String
})
</script>
<template>
<h2>{{pocketMoney ||'용돈안줬어 용돈줘 응애!'}}</h2>
</template>
