<template>
    <header class="header-section section position-static">
        <div class="container-fluid p-0">
            <div class="row no-gutters align-items-center">
                <div class="col-4 col-lg-2 col-xl-3">
                    <!-- Logo Start -->
                    <div class="header-logo header-logo-one mt-0">
                        <a href="index.html">
                            <img src="../assets/images/logo.png" alt="Olson" width='256px'>
                        </a>
                    </div><!-- Logo End -->
                </div>

                <div class="col col-lg-7 col-xl-6 d-none d-lg-block">
                    <div class="main-menu mr-lg-100">
                        <nav>
                            <ul>
                                <li class="menu-item-has-children" v-for='(navList,index) in navLists' :key='index'><router-link to="/">{{navList.mainName}}</router-link>
                                    <ul class="sub-menu">
                                        <li><a  v-for='(item,ind) in navList.childName' :key='ind' @click="changeRouter(item.id)">{{item.childName}}</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="col-8 col-lg-3 col-xl-3">
                    <div class="header-shop-links">
                        <div class="shop-links-item header-search" >
                            <a class="btn-src"><el-button type="text" @click="open3"><img src="../assets/images/icons/search.png" alt="Search"></el-button></a>
                            <a href="javascript:void(0)" class="btn-close"><img src="../assets/images/icons/close.png" alt="Close"></a>
                           
                            <div class="search-content-wrap">
                                <form action="#" method="post">
                                    <label for="search" class="sr-only">Search</label>
                                    <input type="text" id="search" placeholder="Search here..." />
                                </form>
                            </div>
                        </div>                     
                        <div class="shop-links-item header-mini-cart" v-if='userName'>
                            <a @click='$router.push({path:"/cart",query:{userName:userName}})'><img src="../assets/images/icons/cart.png" alt="Cart"></a>
                        </div>
                         <div class="shop-links-item header-mini-cart" v-if='userName'>
                            <a @click='$router.push({path:"/order"})'><img src="../assets/images/icons/order.png" alt="Cart" style='width:21px;margin-left:-30px;'></a>
                        </div>
                        <div class="shop-links-item header-account mr-lg-0"  v-if='userName'>
                            <router-link to="/userCont">
                                <img src="../assets/images/icons/user.png" alt="Account">
                            </router-link>
                        </div>
                         <div class="shop-links-item header-account mr-lg-0"  v-else style='width:100px'>
                            <a  @click='$router.push({path:"/userLogin"})'> 登录  </a>
                        </div>           
                        <div class="shop-links-item header-menu-icon d-lg-none">
                            <a href="javascript:void(0)" class="menu-toggle"><span class="bar"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
    header{
        width: 80% !important;  
        margin: 0 10%
    }
</style>


<script>
import axios from 'axios'
import qs from 'qs'
export default {
   data() {
       return {
           navLists:[],
           userName:localStorage.getItem("id")
       }
   },
   methods: {
        sentData(data) {
            this.$router.push({
                path: `/search/${data}`,
            })
        },
        open3() {
            let self = this;
            this.$prompt('请输入检索内容', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
                inputErrorMessage: '请填写检索内容'
            }).then(({ value }) => {
                self.sentData(value);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
        },
        changeRouter(data) {
            this.$router.push({
                path: `/OnePage/${data}`,
            })
        }
    },
    mounted() {
        var _this=this;
        axios.get('/api/goodstype/getnav').then(function(res){
            _this.navLists=res.data.data;
        })
     },
  }
</script>

<style>
  
</style>