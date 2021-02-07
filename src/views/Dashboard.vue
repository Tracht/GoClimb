<template>
  <div class="home">

  <ContainerHeader> <Title :title="title"></Title> </ContainerHeader>
  <ContainerMain>
    <SearchInput></SearchInput>
    <Card :datapoints="datapoints"></Card>
  </ContainerMain>

  <ContainerFooter></ContainerFooter>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Title from '@/components/Title.vue';
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'Dashboard',
  components: {
    Card,
    Title,
    SearchInput,
  },
  data() {
    return {
      title: 'Sydney',
      datapoints: [
        { title: 'Percentage', value: '10%' },
        { title: 'Cost', value: '£2,000' },
        { title: 'Time', value: '4 months' },
      ],
    };
  },
};
</script>

<style>
</style>
