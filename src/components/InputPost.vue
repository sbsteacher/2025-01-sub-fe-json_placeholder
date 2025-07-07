<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['add-post']);

const state = reactive({
    post: {
        title: '',
        body: ''        
    }
});

const addPost = () => {
    if(!state.post.title) {
        alert('제목을 작성해 주세요.')
        return;
    } else if(!state.post.body) {
        alert('내용을 작성해 주세요.')
        return;
    }
    const jsonBody = {
        title: state.post.title,
        body: state.post.body
    }
    emit('add-post', jsonBody);
    state.post.title = '';
    state.post.body = '';
}

</script>

<template>
    <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" placeholder="3자 이상 20자 이하로 작성해 주세요." v-model="state.post.title">
    </div>
    <div class="mb-3">
        <label for="body" class="form-label">내용</label>
        <textarea id="body" placeholder="3자 이상 200자 이하로 작성해 주세요." v-model="state.post.body" @keyup.enter="addPost"></textarea>
    </div>
    <div class="mb-3">
        <button type="button" class="btn btn-success" @click="addPost">저장</button>
    </div>

</template>

<style scoped>

</style>