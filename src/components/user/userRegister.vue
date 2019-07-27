<template>
    <div>
        <div class="nav">
            注册
        </div>
        <div class="register">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="name" label="用户名">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="账户">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                   <el-form-item>
                    <div class="goRegister">
                        <router-link to="/userLogin">去登录<i class="el-icon-arrow-right"></i></router-link>
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

<style>
    .register{
        width: 30%;
        margin: 20px 32% 0 32%;
    }
    .nav{
        margin:30px 40% 0 40%;
        /* color: #3a8ee6; */
        font-size: 18px;
        font-family: "Helvetica Neue";
    }
</style>


<script>
    import qs from 'qs'
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    name: '',
                    email: '',
                    pass: '',
                    checkPass: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var user = {};
                        user.userName = self.ruleForm.name;
                        user.userAccount = self.ruleForm.email;
                        user.password = self.ruleForm.pass;
                        self.login(user);
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
                this.$axios.post('/api/user/register',qs.stringify(user)).then(function (response) {
                    var data = response.data;
                    console.log(data)
                    if (data.code == 0) {
                        localStorage.setItem('userAccount',data.data.userAccount);
                        localStorage.setItem('userName',data.data.name);
                        localStorage.setItem('id',data.data.id);
                        let urls =  `/`;
                        window.location.href = '/';
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