<template>
  <div class="main">
    <h2>我是 Ref 组件</h2>
    <div>{{ refObj.value.name }} - {{ refObj.value.age }}</div>
    <button @click="addAge">点我增加年龄</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const refObj = ref({
    name: "Kakasei",
    age: 18
})
console.log(refObj);
const addAge = () => {
    refObj.value.age++;
}


</script>

<style scoped>
.main {
    width: 100%;
    height: 20vw;
    background-color: #f0f0f0;
}
</style>