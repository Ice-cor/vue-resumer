<template>
    <div>
        <el-form :label-position="'left'" label-width="80px" >
            <div v-for="(project,index) in projectInfo">
                <el-form-item label="项目名称">
                    <el-input v-model="project.name"></el-input>
                </el-form-item>
                <el-form-item label="链接">
                    <el-input v-model="project.link"></el-input>
                </el-form-item>
                <el-form-item label="项目介绍">
                    <el-input v-model="project.content"></el-input>
                </el-form-item>
                <el-button type="danger" @click="removeProject(index)">删除</el-button>
            </div>
            <el-button type="primary" @click="addProject">添加</el-button>
            <el-button type="primary">提交</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ["projectInfo"],
  methods: {
      addProject(){
          this.projectInfo.push( {name: '',link: '', content: ''})
      },
      removeProject(index){
          this.projectInfo.splice(index,1)
      }
  }
};
</script>
