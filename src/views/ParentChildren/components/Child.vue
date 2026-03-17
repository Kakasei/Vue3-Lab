    <template>
        <div>
            <h2>我是子组件</h2>
            <input type="text" v-model="msg">

        </div>
    </template>

<script setup>
const msg = defineModel()

</script>

<style scoped></style>