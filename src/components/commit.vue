<template>
    <div>
        <div class="form">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="评论">
                    <el-input type="textarea" v-model="form.details"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">评论</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style>
    .form{
        width: 70%;
        margin: 20px 15%;
    }
</style>

<script>
import qs from 'qs'
export default {
    data() {
        return {
            form: {
                id: 0,
                details: '',
                userId: 0,
                userAccount: '',
            },
            rules:{
                details: [
                    { required: true, message: '请输入评论', trigger: 'blur' },
                    { min: 1, message: '请输入评论', trigger: 'blur' }
                ],
            },
        }
    },
    methods: {
        onSubmit() {
            let self = this;
            let id = localStorage.getItem('id');
            let userAccount = localStorage.getItem('userAccount');
            self.form.goodsId = self.$route.params.data;;
            self.form.userId = id;
            self.form.userAccount = userAccount;
            this.$axios.post('/api/comment/addcomment?'+qs.stringify(self.form)).then(function (response) {
                let data = response.data;
                if (data.code == 0) {
                    // self.$message({
                    //     message: data.msg,
                    //     type: 'success'
                    // });
                    window.location.href = `/`;
                }else {
                    alert(data.msg);
                }
            }).catch(
                function (error) {
                console.log(error);
            })
        }
    },
}
</script>
