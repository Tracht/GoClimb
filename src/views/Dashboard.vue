<template>
  <div class="container">
  <Title :title="selectedLocation"></Title>
  <Search></Search>
  <Card :locationData="locationData"></Card>
  </div>
</template>


<script> // @ is an alias to /src
import Title from '@/components/Title.vue'; 
import Search from '@/components/Search.vue';
import Card from '@/components/Card.vue';


export default {
  name: 'Dashboard',
  components: { Card, Title, Search },
  mounted() {
   this.$store.dispatch('getLocationData');
  },
  data() {
    return {};
  },
  computed: {
    selectedLocation() {
      return this.$store.state.selectedLocation; 
    },
    locationData() {
      return this.$store.state.locationData;
    },
  },
  methods: {},
};
</script>

<style>
.container {
  padding-top: 100px;
}
</style>
