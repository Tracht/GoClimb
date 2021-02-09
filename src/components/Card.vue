<template>
    <el-row>
        <el-col :span="24" :offset="5">
            <div class="card-wrapper">
                <el-card class="box-card" v-for="(key, value) in datapoints" :key="value">
                    <div slot="header" class="card-header">
                        <span>{{key.title}}</span>
                        <!-- <el-button type="text">button</el-button> -->
                    </div>

                    <div class="text item">
                        <h3>{{key.value}}</h3>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Card',
  props: {
    datapoints: Array,
  },
};
</script>

<style scoped>

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* .card-header button {
    padding: 2px 5px;
    margin: 0;
} */

.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
}

.el-card {
    width: 300px;
    margin: 5px;
}

.el-textarea {
    margin-top: 10px;
}

/* .el-button {
    margin-top: 10px;
} */
</style>
