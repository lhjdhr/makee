<template>
    <div>
         <!-- Product Section Start -->
        <div class="product-section section bg-white mt-100 mb-60 mt-xs-70 mb-xs-30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-12 order-1 order-lg-2 mb-40">
                        <div class="row">
                            <div class="col-xl-4 col-md-6 col-12 mb-30" v-for='(item,index) in shopList' :key='index'>
                                <div class="product-item bg-gray">
                                    <div class="product-inner">

                                        <div class="image-wrap">
                                            <a href="single-product.html"   class="image">
                                                <img :src="baseUrl+item.picture"   alt="">
                                            </a>
                                            <a href="#" class="wishlist">
                                                <img src="../../assets/images/icons/heart.png" alt="Wishlist">
                                            </a>
                                            <div class="actions">
                                               <a @click='addCart(item.id,item.goodsName,item.price,item.count)'><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#"><i class="fa fa-eye"></i></a>
                                                <a href="#"><i class="fa fa-refresh"></i></a>
                                            </div>
                                        </div>

                                        <div class="content text-center">
                                            <h4 class="title"><a @click="$router.push({path: '/shopDetail', query: {id:item.id}})">{{item.goodsName}}</a></h4>
                                            <div class="price">
                                                <span class="price-sale">{{item.price}}</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="page-pagination mt-20">
                            <ul>
                                <li><a><i class="fa fa-angle-left"></i></a></li>
                                <li class="active"><a>1</a></li>
                                <li><a><i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>

                    </div>


                    <div class="col-lg-3 col-12 order-2 order-lg-1">
                        <div class="sidebar">
                            <h3 class="title">Category</h3>
                            <ul class="sidebar-list">
                                <li><a href="#">Shart <span class="num">18</span></a></li>
                                <li><a href="#">Pants <span class="num">09</span></a></li>
                                <li><a href="#">T-Shart <span class="num">05</span></a></li>
                                <li><a href="#">Tops <span class="num">03</span></a></li>
                                <li><a href="#">Kid's Clothes <span class="num">15</span></a></li>
                                <li><a href="#">Watch <span class="num">07</span></a></li>
                                <li><a href="#">Accessories <span class="num">02</span></a></li>
                            </ul>
                        </div>

                        <div class="sidebar">
                            <h3 class="title">Colors</h3>
                        </div>

                        <div class="sidebar">
                            <h3 class="title">Popular Product</h3>

                            <div class="sidebar-product-wrap">
                                <div class="sidebar-product">
                                    <a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html" class="image"><img
                                            src="assets/images/product/product-1.png" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/assets/images/product/product-1.png" alt=""></a>
                                    <div class="content">
                                        <a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html" class="title">Injected humour</a>
                                        <span class="price">$799.99</span>
                                        <div class="ratting">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar-product">
                                    <a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html" class="image"><img
                                            src="assets/images/product/product-2.png" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/assets/images/product/product-2.png" alt=""></a>
                                    <div class="content">
                                        <a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html" class="title">Classical literature</a>
                                        <span class="price">$599.99 <span class="old">$799.99</span></span>
                                        <div class="ratting">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar-product">
                                    <a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html" class="image"><img
                                            src="assets/images/product/product-3.png" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/assets/images/product/product-3.png" alt=""></a>
                                    <div class="content">
                                        <a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html" class="title">Classical literature</a>
                                        <span class="price">$649.99 <span class="old">$799.99</span></span>
                                        <div class="ratting">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="sidebar">
                            <h3 class="title">Price</h3>
                            <div class="sidebar-price">
                                <div id="price-range"></div>
                                <input type="text" id="price-amount" readonly>
                            </div>
                        </div>
                        <div class="sidebar">
                            <h3 class="title">Tags</h3>
                            <ul class="sidebar-tag">
                                <li><a href="#">New</a></li>
                                <li><a href="#">brand</a></li>
                                <li><a href="#">black</a></li>
                                <li><a href="#">white</a></li>
                                <li><a href="#">chire</a></li>
                                <li><a href="#">table</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">ipsum</a></li>
                                <li><a href="#">dolor</a></li>
                                <li><a href="#">sit</a></li>
                                <li><a href="#">amet</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- Product Section End -->
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
   data() {
       return {
            shopList:[] ,
            baseUrl:'http://127.0.0.1',
            param: 0,
            userId:localStorage.getItem("id")
       }
   },
   methods:{
       getData() {
            var self=this;
            self.param  = self.$route.params.data;
            axios.get('/api/goods/getbychildid?childId='+self.param).then(function(res){
                self.shopList = res.data.data;
            })
        },
        addCart:function(id,goodsName,price,count){
         var _this=this
        let datas={
            "carId":_this.userId,
            "userId": _this.userId,
            "goodsId": id,
            "goodsName": goodsName,
            "goodsPrice": price,
            "goodsCount": count
        }
       axios({
           url:'/api/cargoods/addcargoods',
           method:'post',
           data: qs.stringify(datas)
       }).then(function(res){
            console.log(res.data)
         _this.$router.push({path:'/cart',query:{userId:_this.userId}})
       })
 
     }
    },

    watch: {
        '$route' (to, from) {
            this.getData();
        }
    },
    mounted() {
        this.getData();
    },
 
}
</script>
<style lang="">
    
</style>