<script setup>
import Post from '@/components/Post.vue';
import { reactive, onMounted } from 'vue';

const state = reactive({
    post: {
        id: 0,
        title: '',
        body: '' ,
        userId: 0
    }
});

onMounted(() => {
    const passJson = history.state.data; //
    if(passJson) {
        //passJson을 객체로 바꿔서
        state.post = JSON.parse(passJson);
    }
});
</script>

<template>
    <h1>Detail.vue</h1>
    <!-- Post 컴포넌트 이용하여 화면에 내용을 출력해 주세요. -->
</template>

<style scoped>

</style>