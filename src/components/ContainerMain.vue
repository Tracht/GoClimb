<template>
  <el-container>
      <!-- <el-aside width="200px"></el-aside> -->
      <el-container>
          <el-container>
              <el-main>
                <Title :title="title"></Title>
              </el-main>
          </el-container>
      </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';

export default {
  name: 'Main',
  components: {
    Title,
  },
  props: {
    title: String,
  },
};
</script>

<style>
  /* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
