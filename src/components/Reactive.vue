<template>
    <div class="main">
        <div>我是 Reactive 组件，研究reactive响应式对象</div>
        <div>{{ phone.brand }} - {{ phone.model }} - {{ phone.price }}</div>
        <button @click="phone.price++">点我增加价格</button>
        <hr>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="item of games" :key="item.name">
                {{ item.name }} - {{ item.genre }}
            </li>
        </ul>
        <button @click="games.push({ name: '塞尔达传说：旷野之息', genre: '动作冒险' })">点我添加新游戏</button>
        <hr>

    </div>

</template>

<script setup>
import { ref, reactive } from 'vue';

const phone = reactive({
    brand: "Apple",
    model: "iPhone 14 Pro",
    price: 5000
})
const games = reactive([
    { name: "原神", genre: "开放世界" },
    { name: "英雄联盟", genre: "MOBA" },
    { name: "王者荣耀", genre: "MOBA" }
])


console.log("phone:", phone);
</script>

<style scoped>
.main {
    width: 100%;
    height: 20vw;
    background-color: lavenderblush;
}
</style>