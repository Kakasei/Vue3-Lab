<template>
    <div class="main">
        <div class="menu">
            <!-- <div class="menu-item" v-for="item in routes[0].children" :key="item.path">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </div> -->
            <menu-item :routes="routes"></menu-item>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { routes } from '@/router/routes';
import MenuItem from "@/views/MenuItem.vue"

console.log(routes);
</script>

<style scoped>
.main {
    display: flex;

}

.menu {
    /* display: flex; */
}

.menu-item {
    margin-bottom: 10px;
    background-color: aliceblue;

}

.content {
    flex: 1;
}
</style>