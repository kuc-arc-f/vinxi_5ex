<script setup lang="ts">
import Head from "../components/Head.vue";

const testProc = async function(){
  try{
    const response = await fetch(`/api/test1?id=2`);
    if (!response.ok) throw new Error("error, /api/test1");
    const data = await response.json();
    console.log(data);

    const postData = {id: 1, name: "name-post222"}
    const resPost = await fetch(`/api/test2`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      }
    );
    if (!resPost.ok) throw new Error("error, /api/hello");
    const dataPost = await resPost.json();
    console.log(dataPost);
  }catch(e){console.error(e)}
}
</script>

<template>
  <Head />
  <h1 class="text-3xl font-bold mb-4">Test1</h1>
  <hr class="my-2" />
  <button @click="testProc()" 
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    test
  </button>

</template>

<style scoped>
</style>
