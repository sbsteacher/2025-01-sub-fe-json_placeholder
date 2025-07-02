<script setup>
import { onMounted } from 'vue';
import httpService from '@/services/HttpService';

onMounted(() => {
    findAll();
});

const findAll = async () => {
    const data = await httpService.findAll();
    console.log('data:', data);
}
</script>

<template>
    <h1>List.vue</h1>
</template>

<style scoped>

</style>