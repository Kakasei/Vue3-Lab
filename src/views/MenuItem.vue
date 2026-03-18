<template>
    <template v-for="item in routes" :key="item.path">
        <!-- 如果该路由下有 children（嵌套的父级路由），则不渲染它自身链接，而是递归调用本组件渲染其子路由 -->
        <template v-if="item.children && item.children.length > 0">
            <MenuItem :routes="item.children" />
        </template>

        <!-- 否则它本身就是最后一层的路由（没有更深嵌套了），在这里渲染直达链接 -->
        <router-link v-else-if="item.path" :to="item.path" class="menu-item">
            {{ item.name || item.path.split('/').pop() }}
        </router-link>
    </template>
</template>

<script setup>
// Vue3 setup 可以直接通过定义文件名/内部推导实现递归，不需要自己 import 自己
defineProps({
    routes: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>

<style scoped>
.menu-item {
    display: block;
    margin-bottom: 5px;
    padding: 10px 15px;
    background-color: #f0f8ff;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s;
}

.menu-item:hover {
    background-color: #d0e8ff;
}

.router-link-active {
    background-color: #42b983;
    color: white;
    font-weight: bold;
}
</style>