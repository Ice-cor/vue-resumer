<template>
    <div id="login" class="login">
        <div class="formWrap">
            <h3>注册</h3>
            <el-form status-icon label-width="80px"  :label-position="'left'">
                <el-form-item label="用户名">
                    <el-input type="username" v-model="formDate.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formDate.password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            formDate: {
                username: '',
                password: ''
            }
        }
    },
    methods:{
        resetForm(){
            for(let key in this.formDate){
                
                this.formDate[key] = ''
            }
        },
        submitForm(){
            
        }
    }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  > .formWrap {
    position: absolute;
    right: 50px;
    top: 30%;
    width: 300px;
    box-shadow: 0px 0px 5px #888888;
    padding: 24px 32px;
    border-radius: 10px;
    > h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>
