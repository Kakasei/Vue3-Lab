<template>
  <div class="container">
    我是父子组件Playground
    <Parent></Parent>
  </div>
</template>

<script setup>
import Parent from './components/Parent.vue';
</script>

<style scoped>
.container{
    
    width: 100%;
    height: 20vh;
    background-color: #f0f0f0;
}
</style>