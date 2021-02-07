<template>
  <div class="home">

  <h1>Homepage</h1>
  <ContainerHeader></ContainerHeader>

  <ContainerMain></ContainerMain>

  <ContainerMain></ContainerMain>

  <ContainerMain></ContainerMain>

  <ContainerFooter></ContainerFooter>

  </div>
</template>

<script>
// @ is an alias to /src
import ContainerHeader from '@/components/ContainerHeader.vue';
import ContainerMain from '@/components/ContainerMain.vue';
import ContainerFooter from '@/components/ContainerFooter.vue';

export default {
  name: 'Home',
  components: {
    ContainerHeader,
    ContainerMain,
    ContainerFooter,
  },
};
</script>

<style>
</style>
