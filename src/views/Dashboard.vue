<template>
  <div class="home">

  <ContainerHeader> <Title :title="location"></Title> </ContainerHeader>
  <ContainerMain>
    <SearchFilters :searchableList="searchableList"></SearchFilters>
    <Card :datapoints="datapoints"></Card>
  </ContainerMain>

  <ContainerFooter></ContainerFooter>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Title from '@/components/Title.vue';
import SearchFilters from '@/components/SearchFilters.vue';

export default {
  name: 'Dashboard',
  components: {
    Card,
    Title,
    SearchFilters,
  },
  data() {
    return {
      datapoints: [
        { title: 'Percentage', value: '10%' },
        { title: 'Cost', value: '£2,000' },
        { title: 'Time', value: '4 months' },
      ],
    };
  },
  computed: {
    location() {
      return this.$store.state.selectedLocation;
    },
    searchableList() {
      return this.$store.state.searchableLocations;
    },
    searchDataResults() {
      return this.$store.state.searchDataResults;
    },
  },
  methods: {},

};
</script>

<style>
</style>
