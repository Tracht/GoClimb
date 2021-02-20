<template>
    <div>
      <el-form ref="form" :inline="true" label-width="100px">

        <el-row>
          <el-col :span="24">
            <el-autocomplete
              class="inline-input"
              v-model="form.searchInput"
              :fetch-suggestions="querySearch"
              placeholder="Seach a location"
              :trigger-on-focus="false"
              @select="handleSelect"
            >
            <el-button slot="append" icon="el-icon-search"></el-button>
            </el-autocomplete>
            
          </el-col>
        </el-row>

        <el-row class="search-form-input form-wrapper">
          <el-col :span="24">
            <el-form-item label="rooms">
              <el-input v-model="form.rooms"></el-input>
            </el-form-item>
            <el-form-item label="size">
              <el-input v-model="form.size" placeholder="in square meters"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>
</template>

<script>
export default {
  name: 'Search',
  props: {},
  data() {
    return {
      locations: [],
      form: {
        searchInput: '',
        rooms: '',
        size: '',
      },
    };
  },
  mounted() {
    this.$store.dispatch('getLocations');
    this.locations = this.$store.state.allLocations;
  },
  computed: { },
  methods: {
    querySearch(queryString, cb) {
      const results = queryString ? this.locations.filter(this.createFilter(queryString)) : this.locations;
      cb(results); // call callback function to return suggestions
    },
    createFilter(queryString) {
        return (location) => {
          return (location.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    },
    handleSelect(location) {
      this.form.searchInput = location.value;
      this.$store.commit('setLocationName', location.value);
    },
  },
};
</script>

<style>

.search-form-input{
  margin-top: 20px;
}

.form-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: center;
}

</style>
