<template>
    <div class="main">
        <div>Home</div>
        <div class="menu">
            <router-link v-for="route in routes[0].children" :key="route.path" :to="route.path">
                {{ route.name }}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { routes } from '@/router/routes';

console.log(routes);
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.menu {
    display: flex;
}
</style>