<template>
  <div class="main">
    <h2>我是 Ref 组件</h2>
    <div>{{ refObj.name }} - {{ refObj.age }}</div>
    <button @click="addAge">点我增加年龄</button>
    <hr>
    <div v-for="item in arr" :key="item.genre">
      {{ item.name }} - {{ item.genre }}
    </div>
    <button @click="changeGame">修改游戏</button>
    <hr>
    <h2>girlfriend:</h2>
    <div>{{ obj.name }} - {{ obj.age }}</div>
    <button @click="changeGirlfriend1">点我修改女朋友，方法1</button>
    <button @click="changeGirlfriend2">点我修改女朋友，方法2</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref("Kakasei");
console.log("name", name);

const refObj = ref({
  name: "Kakasei",
  age: 18
})
console.log("refObj", refObj);
const addAge = () => {
  refObj.value.age++;
}

const arr = ref([
  { name: "魔兽世界", genre: "MMORPG" },
  { name: "英雄联盟", genre: "MOBA" },
])
console.log("arr", arr);

const changeGame = () => {
  arr.value[1].name = "王者荣耀";
}

// 
const obj = ref({
  name: "hotaru",
  age: 16
})
const changeGirlfriend1 = () => {
  obj.value.name = "miyako";
  obj.value.age = 17;
}
const changeGirlfriend2 = () => {
  obj.value = {
    name: "yuki",
    age: 18
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 20vw;
  background-color: blanchedalmond;
}
</style>