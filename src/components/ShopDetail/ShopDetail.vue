<template>
    <div>
          <div class="page-section section mt-100 mb-100 mt-xs-70 mb-xs-70">
        <div class="container">
            <div class="row mb-20">
                <!-- Single Product Images -->
                <div class="col-lg-5 col-md-6 col-12 mb-40">
                    <!-- Tab panes -->
                    <div class="pro-large-img mb-10 fix">
                        <img src="assets/images/product/product-1.png" tppabs=" " alt="" data-zoom-image="assets/images/product/product-zoom-1.png" class="product-zoom" />
                    </div>
                    <!-- Single Product Thumbnail Slider -->
                    <ul id="pro-thumb-img" class="pro-thumb-img">
                        <li><img :src='baseUrl+detailInfo.picture'></li>
                        
                    </ul>
                </div>
                <!-- Single Product Details -->
                <div class="col-lg-7 col-md-6 col-12 mb-40">
                    <div class="product-details section">
                        <!-- Title -->
                        <h1 class="title">{{detailInfo.goodsName}}</h1>
                        <!-- Price Ratting -->
                        <div class="price-ratting section">
                            <!-- Price -->
                            <span class="price float-left"><span class="new">$ {{detailInfo.price}}</span></span>
                 
                        </div>
                        <!-- Short Description -->
                        <div class="short-desc section">
                            <h5 class="pd-sub-title">Quick Overview</h5>
                            <p>{{detailInfo.goodsDescribe}}</p>
                        </div>
  
                        <!-- Quantity Cart -->
                        <div class="quantity-cart section">
                            <div class="product-quantity">
                                <input type="text" value="0">
                            </div>
                            <button class="add-to-cart"><a @click='addCart(detailInfo.id,detailInfo.goodsName,detailInfo.price,detailInfo.count)'>加入购物车</a></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Section End -->
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
     data() {
         return {
             detailInfo:'',
             baseUrl:'http://127.0.0.1',
             userId:localStorage.getItem('id') 
         }
     },
     mounted() {
      var _this=this
      let param = this.$route.query.id
       console.log(param)
       axios.get('/api/goods/getbyid?id='+param).then(function(res){
          console.log(res.data)
           _this.detailInfo=res.data.data
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
                _this.$router.push({path:'/cart',query:{userId:_this.userId}})
            })
 
     }
     },
}
</script>