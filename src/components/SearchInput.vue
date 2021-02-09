<template>
  <el-row class="demo-autocomplete">
    <el-col :span="24">
      <el-autocomplete
        class="inline-input"
        v-model="searchInput"
        :fetch-suggestions="querySearch"
        placeholder="Seach a location"
        :trigger-on-focus="false"
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
    searchableList: Array,
  },
  data() {
    return {
      result: [],
      searchInput: '',
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
  },
  mounted() {
    this.result = this.searchableList();
  },
};
</script>
