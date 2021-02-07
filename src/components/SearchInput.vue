<template>
  <el-row class="demo-autocomplete">
    <el-col :span="24">
      <el-autocomplete
        class="inline-input"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="Seach a location"
        :trigger-on-focus="false"
        @select="handleSelect"
      >
      <el-button slot="append" icon="el-icon-search"></el-button>
      </el-autocomplete>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'SearchInput',
  props: {
    datapoints: Array,
  },
  data() {
    return {
      result: [],
      state: '',
    };
  },
  methods: {
    querySearch(queryString, cb) {
      const { result } = this;
      const results = queryString ? result.filter(this.createFilter(queryString)) : result;
      // call callback function to return suggestions
      cb(results);
    },
    createFilter(queryString) {
      return (link) => (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    },
    loadAll() {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.result = this.loadAll();
  },
};
</script>
