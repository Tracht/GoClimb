<template>
    <Hero></Hero>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'; 
export default {
  name: 'Home',
  components: { Hero },
  data() {
    return {};
  },
};
</script>

<style>
</style>
