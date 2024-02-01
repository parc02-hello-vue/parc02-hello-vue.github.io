<script setup>
import Child from './components/Child.vue'
import { ref} from 'vue'

const pocketMoney = ref('부모 컴포넌트로부터 <📩>를 받았어요!')
</script>

<template>
<Child :pocketMoney="pocketMoney"/>
</template>

