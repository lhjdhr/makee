<template>
    <div>
        <div class="nav">
            登录
        </div>
        <div class="login">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="email" label="账户">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="goRegister">
                        <router-link to="/userRegister">去注册<i class="el-icon-arrow-right"></i></router-link>
                    </div>
                </el-form-item>       
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scope>
    .login{
        width: 30%;
        margin: 20px 32% 0 32%;
    }
    .nav{
        margin:80px 40% 0 40%;
        font-size: 18px;
        font-family: "Helvetica Neue";
    }
    .goRegister{
        margin-left: 80%;
    }
</style>

<script>
import axios from 'axios'
import qs from 'qs'
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    email: '',
                    password: '',
                },
                rules: {
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var user = {};
                        user.userAccount = self.ruleForm.email;
                        user.password = self.ruleForm.password;
                        self.login(qs.stringify(user));
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            login(user) {
                let self = this;
                this.$axios.post('/api/user/login',user).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        localStorage.setItem('userAccount',data.data.userAccount);
                        localStorage.setItem('userName',data.data.userName);
                        localStorage.setItem('id',data.data.id);
                        let urls =  `/`;
                        window.location.href = urls;
                    }else {
                        alert(data.msg);
                    }
                }).catch(
                    function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>