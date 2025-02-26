<script lang="ts">

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

<div>
  <h1 class="text-3xl font-bold">Test1</h1>
  <hr class="my-2" />
  <button on:click={testProc}>[ Test ]</button>
</div>

<style>
</style>
