<template>
  <div class="home">

 <ContainerHeader> </ContainerHeader>
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
      title: 'Dashboard',
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
