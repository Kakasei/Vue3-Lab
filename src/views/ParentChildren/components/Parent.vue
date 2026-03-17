<template>
  <div>
    <h2>我是父组件</h2>
    <h2>我是双向绑定{{ msg }}</h2>
    <Child v-model="msg" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const msg = ref("我是父组件的msg");

</script>

<style scoped>

</style>