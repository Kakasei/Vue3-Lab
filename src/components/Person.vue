<template>
    <div>hello world</div>
    <div>
        
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const phone = reactive({
    brand:"Apple",
    model:"iPhone 14 Pro",
    year:2022
})

console.log(phone);
</script>