<template>
    <div class="delete">
  
      <el-button type="primary" plain @click="hanleDelete()">减</el-button>
    </div>
  </template>
    <script>
  export default {
    data() {
      return {};
    },
    methods:{
        hanleDelete(){
            this.$store.state.count--
        }
    }
  };
  </script>
    <style lang="scss" scoped>
  </style>