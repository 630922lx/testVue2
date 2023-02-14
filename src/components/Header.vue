<template>
  <div class="header">

    <el-button type="primary" plain @click="handkeAdd()">加</el-button>
  </div>
</template>
  <script>
export default {
  data() {
    return {};
  },
  methods:{
    handkeAdd(){
        // 触发mutations方法
        this.$store.commit('add')
    }
  }
};
</script>
  <style lang="scss" scoped>
</style>