<script setup>
import { ref } from 'vue'

const awesome = ref(true)

console.log(awesome.valie)

function toggleAwesome(v)
{
    awesome.value =!v
}



function isAwesome()
{
    return awesome.value
}    

    </script>

<template>
    <button @click ="toggleAwesome(awesome)">toggle</button>

    <h1 v-if ="isAwesome()"> Vue is awesome!</h1>
    <h1 v-else> Oh no Vue isn't awesome 😭😭😭</h1>

    <h2 v-if="isAwesome()">TRUE</h2>
    <h2 v-else>FALSE</h2>
    </template>
