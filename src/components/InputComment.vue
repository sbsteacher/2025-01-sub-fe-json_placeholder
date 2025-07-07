<script setup>
const model = {
    comment: ''
}
</script>

<template>
    <label>댓글: <input type="text" v-model="model.comment"></label>
    <button>저장</button>
</template>

<style scoped>

</style>