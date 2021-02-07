<template>
  <div class="home">

  <h1>Dashboard</h1>
  <ContainerHeader></ContainerHeader>

  <ContainerMain>
    <Card :datapoints="datapoints"></Card>
  </ContainerMain>

  <ContainerFooter></ContainerFooter>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Dashboard',
  components: {
    Card,
  },
  data() {
    return {
      datapoints: [
        { percentage: '10%' },
        { cost: '£2,000' },
        { time: '12 months' },
      ],
    };
  },
};
</script>

<style>
</style>
