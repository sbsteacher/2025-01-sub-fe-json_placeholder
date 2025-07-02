<script setup>
import Post from '@/components/Post.vue';
import Comment from '@/components/Comment.vue';
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService';

const state = reactive({
  post: {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  },
  comments: []
});

onMounted(async () => {
  const passJson = history.state.data; //
  console.log('passJson:', passJson);
  if (passJson) {
    //passJson을 객체로 바꿔서
    state.post = JSON.parse(passJson);

    const commentData = await httpService.postCommentFindAll(state.post.id);
    state.comments = commentData;
  }
});
</script>

<template>
  <h1>Detail.vue</h1>
  <!-- Post 컴포넌트 이용하여 화면에 내용을 출력해 주세요. -->
  <post :item="state.post" />
  <hr>
  <h3>댓글들</h3>
  <comment v-for="item in state.comments" :item="item" :id="item.id"/>
</template>

<style scoped></style>
