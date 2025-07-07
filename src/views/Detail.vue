<script setup>
import Post from '@/components/Post.vue';
import Comment from '@/components/Comment.vue';
import InputComment from '@/components/InputComment.vue';
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

const addComment = async comment => {
  console.log('comment:', comment);  
  const jsonBody = {
    postId: state.post.id,
    comment,
    userId: 5
  }
  //const data = await httpService.postSave(jsonBody); //통신하고 응답 데이터를 받는다. 
  const data = {
    "postId": state.post.id,
    "id": 12,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": comment
  };
  state.comments.push(data);
}

</script>

<template>
  <h1>Detail.vue</h1>
  <!-- Post 컴포넌트 이용하여 화면에 내용을 출력해 주세요. -->
  <post :item="state.post" />
  <hr>
  <h3>댓글들</h3>  
  <input-comment @click-save="addComment"></input-comment>  
  <hr>
  <comment v-for="item in state.comments" :item="item" :id="item.id"/>
</template>

<style scoped></style>
