<template>
    <div>
      <el-form ref="form" :inline="true" :model="filterForm" label-width="100px">

        <el-row>
          <el-col :span="24">
            <el-autocomplete
              class="inline-input"
              v-model="form.searchInput"
              :fetch-suggestions="querySearch"
              placeholder="Seach a location"
              :trigger-on-focus="false"
            >
            <el-button slot="append" icon="el-icon-search"></el-button>
            </el-autocomplete>
          </el-col>
        </el-row>

        <el-row class="search-form-input">
          <el-col :span="24">
            <el-form-item label="Size">
              <el-input v-model="form.size" placeholder="in square meters"></el-input>
            </el-form-item>

            <el-form-item label="Rooms">
              <el-input v-model="form.rooms"></el-input>
            </el-form-item>

          </el-col>
        </el-row>

      </el-form>
    </div>
</template>

<script>
export default {
  name: 'SearchFilters',
  props: {
    searchableList: Array,
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        searchInput: '',
      },
      result: [],
    };
  },
  methods: {
    querySearch(queryString, cb) {
      const { result } = this;
      const results = queryString ? result.filter(this.createFilter(queryString)) : result;
      cb(results); // call callback function to return suggestions
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

<style>

.search-form-input{
  margin-top: 20px;
}

</style>
