<script setup lang="ts">
import { onMounted } from "vue";
// @ts-ignore
import CorgiTable from './components/CorgiTable.vue';
import TheHeader from './components/TheHeader.vue';
import PocketBase  from 'pocketbase';
const client = new PocketBase('http://localhost:8090' );

onMounted(async () => {
  await client.Admins.authViaEmail("test@test.com", "test");
  const resultList = await client.Records.getList("corgi_bingo");

  console.log({resultList})
})
</script>


<template>

 <n-space vertical size="large" justify="center">
    <n-layout>
      <n-layout-header>
        <TheHeader/>
      </n-layout-header>
      <n-layout-content class="content" content-style="padding: 24px;">
        <CorgiTable/>
      </n-layout-content>
    </n-layout>
 </n-space>

</template>

<style lang="scss">
body {
    background-color: transparent !important;
    background-image: url("https://i.pinimg.com/564x/7d/b2/86/7db2863c8654c7157824f7d42b67a169.jpg") !important;

    h1 {
    color: red !important
  }
}

.content {
  padding: 2rem;
}

</style>
