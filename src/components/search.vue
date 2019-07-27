<template>
    <div>
        <div class="table">
            <el-table
                :data="SearchData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                    prop="goodsName"
                    label="商品名"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="mainName"
                    label="商品类型"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="childName"
                    label="商品类"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="价格"
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="库存"
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="goodsDescribe"
                    label="商品描述">
                </el-table-column>
            </el-table>
            <div class="page">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size=10
                    layout="prev, pager, next"
                    :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .table{
        width: 70%;
        margin: 20px auto;
    }
    .page{
        width: 100%;
        margin: 50px auto;
    }
</style>

<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                SearchData: [],
                count: 0,
            }
        },
        methods: {
            handleCurrentChange(val) {
                console.log(val);
                this.getDatas(val);
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            getData() {
                let self = this;
                let SearchData = self.$route.params.data;
                self.$axios.get("/api/goods/getgoods?search="+SearchData).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.count = data.count;
                        self.SearchData = data.data;
                    }else {
                        self.$notify({
                            type: 'error',
                            message: data.msg,
                            duration: 2000,
                        });
                    }
                });
            },
            getDatas(page) {
                let self = this;
                let SearchData = self.$route.params.data;
                this.$axios.get("/api/goods/getgoods?"+'page='+page+'&limit=10'+'&search='+SearchData).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.count = data.count;
                        self.SearchData = data.data;
                    } else {
                        self.$notify({
                            type: 'error',
                            message: data.msg,
                            duration: 2000,
                        });
                    }
                });
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>