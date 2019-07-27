<template>
    <div>
        <!-- Slider Section Start -->
        <div class="slider-section section">    
            <div id="demo" class="carousel slide" data-ride="carousel">
                <!-- 指示符 -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <!-- 轮播图片 -->
                <div class="carousel-inner lunboimg" style='height:530px;'>
                    <div class="carousel-item img active">
                    <img src="../assets/images/hero/hero-1.jpg" style='height:530px;'>
                    </div>
                    <div class="carousel-item img">
                    <img src="../assets/images/hero/hero-2.jpg" style='height:530px;'>
                    </div>
                    <div class="carousel-item img">
                    <img src="../assets/images/hero/hero-3.jpg" style='height:530px;'>
                    </div>
                </div>
                <!-- 左右切换按钮 -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>

        </div>
        <!-- Slider Section End -->

        <!-- Banner Section Start -->
        <div class="banner-section section mt-100 mb-80 mt-xs-70 mb-xs-50">
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-1.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-2.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-3.jpg" alt="Banner"></a></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Banner Section End -->

        <!-- Product Section Start -->
        <div class="product-section section bg-gray pt-100 pb-70 pt-xs-70 pb-xs-40">
            <div class="container">
                <div class="row">
                    <div class="section-title text-center col mb-80 mb-xs-50">
                        <h1>New Products</h1>
                    </div>
                </div>
                <div class="row">
                     <div class="col-lg-3 col-md-6 col-12 mb-30" v-for='(item,index) in shopList' :key='index'>
                    <div class="product-item bg-white">
                        <div class="product-inner">
                            <div class="image-wrap">
                                <a href="single-product.html" class="image">
                                         <img :src="baseUrl+item.picture" alt="">
                                </a>
                                <a href="#" class="wishlist"><img src="../assets/images/icons/heart.png"alt="Wishlist"></a>
                                <div class="actions">
                                    <a @click='addCart(item.id,item.goodsName,item.price,item.count)'><i class="fa fa-shopping-cart"></i></a>
                                    <a href="#"><i class="fa fa-eye"></i></a>
                                    <a href="#"><i class="fa fa-refresh"></i></a>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h4 class="title"><a @click="$router.push({path: '/shopDetail', query: {id:item.id}})">{{item.goodsName}}</a></h4>
                                <div class="price">
                                   <!--<del class="price-old">$799.99</del>-->
                                    <span class="price-sale">${{item.price}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            </div>
        </div>
        <!-- Product Section End -->

        <!-- Banner Section Start -->
        <div class="banner-section section mt-100 mb-80 mt-xs-70 mb-xs-50">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-4.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-5.jpg" alt="Banner"></a></div>
                    </div>
                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-6.jpg" alt="Banner"></a></div>
                    </div>
                    <div class="col-md-8 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-7.jpg" alt="Banner"></a></div>
                    </div>
                   <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="../assets/images/banner/banner-8.jpg" alt="Banner"></a></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to action Section Start -->
        <div class="call-to-action section mb-100 mb-xs-70">
            <div class="container">
                  <div class="row">
               
            </div>
            </div>
        </div>
        <!-- Call to action Section End -->

        <!-- Subscribe Section Start -->
        <div class="subscribe-section section bg-light-blue pt-55 pb-55">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 ml-auto mr-auto col-12">
                        <div class="row align-items-center">

                            <!-- Mailchimp Subscribe Content Start -->
                            <div class="col-lg-6 col-12 mb-15 mt-15">
                                <div class="subscribe-content">
                                    <h2>Subscribe to our Newsletter</h2>
                                    <h4>Subscribe today and get 15% <br>discount cupon code</h4>
                                </div>
                            </div><!-- Mailchimp Subscribe Content End -->


                            <!-- Mailchimp Subscribe Form Start -->
                            <div class="col-lg-6 col-12 mb-15 mt-15">

                                <form id="mc-form" class="mc-form subscribe-form">
                                    <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email"/>
                                    <button id="mc-submit">subscribe</button>
                                </form>
                                <!-- mailchimp-alerts Start -->
                                <div class="mailchimp-alerts text-centre">
                                    <div class="mailchimp-submitting"></div><!-- mailchimp-submitting end -->
                                    <div class="mailchimp-success"></div><!-- mailchimp-success end -->
                                    <div class="mailchimp-error"></div><!-- mailchimp-error end -->
                                </div><!-- mailchimp-alerts end -->

                            </div><!-- Mailchimp Subscribe Form End -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <FooterGuide></FooterGuide>   -->
    </div>
</template>

<style>
    body{
        width: 100%;
    }
    .img{
        width: 90%;
        margin: 0 5%;
        height: 780px;
        overflow: hidden;
    }
</style>

<script>
import axios from 'axios'
import qs from 'qs'
export default {

  data() {
      return {
         shopList:[] ,
         baseUrl:"http://127.0.0.1",
         userId:localStorage.getItem("id")
      }
  },
  mounted() {
      var _this=this;
      axios.get('/api/goods/getgoods').then(function(res){
         _this.shopList=res.data.data
     })
  },
  methods: {
      
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
         _this.$router.push({path:'/cart',query:{userId:2}})
       })
 
     }
  },
}
</script>


 
