<template>
  <div>

  <!-- <Title :title="title"/> -->
  <Title :title="bannerText"></Title>
  <ContainerHeader :title="headerText"></ContainerHeader>
  <ContainerMain :title="mainText"></ContainerMain>
  <ContainerFooter :title="footerText"></ContainerFooter>

  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import ContainerHeader from '@/components/ContainerHeader.vue';
import ContainerMain from '@/components/ContainerMain.vue';
import ContainerFooter from '@/components/ContainerFooter.vue';

export default {
  name: 'Home',
  components: {
    Title,
    ContainerHeader,
    ContainerMain,
    ContainerFooter,
  },
  data() {
    return {
      bannerText: 'Welcome',
      headerText: 'Homepage',
      mainText: 'Get Started',
      footerText: 'Contact us',
    };
  },
};
</script>

<style>
</style>
