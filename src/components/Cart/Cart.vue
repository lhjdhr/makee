<template>
    <div>
        <!-- <HeaderGuide></HeaderGuide>   -->
        <div class="page-section section mt-100 mb-60 mt-xs-70 mb-xs-30">
            <div class="container">
                <form action="#">				
                    <div class="row">
                        <div class="col-12">
                            <div class="cart-table table-responsive mb-40">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="pro-thumbnail"  @click="selectProduct(isSelectAll)" v-bind:checked="isSelectAll">全选</th>
                                            <th class="pro-title">商品</th>
                                            <th class="pro-price">数量</th>
                                            <th class="pro-quantity">单价(元)</th>
                                            <th class="pro-subtotal">金额(元)</th>
                                            <th class="pro-remove">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in productList" :key='index'>
                                            <td class="pro-thumbnail"><input type='checkBox'  v-bind:checked="item.isSelect" @click="item.isSelect=!item.isSelect"></td>
                                            <td class="pro-title">{{item.goodsName}}</td>
                                            <td class="pro-quantity"><div class="product-quantity"><input v-model='item.goodsCount'/><span class="dec qtybtn"  @click="item.goodsCount>0?item.goodsCount--:''">-</span><span class="inc qtybtn" @click='item.goodsCount++'>+</span></div></td>
                                            <td class="pro-price"><span class="amount">{{item.goodsPrice}}</span></td>
                                            <td class="pro-subtotal">{{item.goodsPrice*item.goodsCount}}</td>
                                            <td class="pro-remove">
                                            <a href="#" @click="deletePro(item.goodsId)">×</a>
                                            <strong>|</strong>
                                            <a href="#" @click="addOrder(item.goodsId,item.goodsName,item.goodsCount,item.goodsPrice)">提交订单</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="checkPro">                           
                                <div class="rightConent">
                                    <span> 商品总计：￥{{getTotal}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>	
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default { 
     data() {
         return {
             	productList:[],
                userId:localStorage.getItem("id"),
                userName:localStorage.getItem("userName"),
                totalPrice:0,
         }
     },
    mounted() {
        var _this=this;
        _this.productList.map(function(item){
            _this.$set(item,'isSelect',false)
        })
       
        console.log(_this.userId)
        axios.get('/api/cargoods/findbyuserid?userId='+_this.userId).then(function(res){
            _this.productList=res.data.data
            console.log(_this.productList)
        })
    },
    methods: {

        selectProduct:function(_isSelect){   //全选操作，遍历所有然后取反
            var _this=this
            if(_this.productList!=null){
                for(var i=0,len=_this.productList.length;i<len;i++){
                _this.productList[i].isSelect=!_isSelect;
            }
            }
        },
        deletePro:function(index){  
            var _this=this
            axios.delete('/api/cargoods/deletebyid?id='+index).then(function(){
                axios.get('/api/cargoods/findbyuserid?userId='+_this.userId).then(function(res){
                  _this.productList=res.data.data
                })
           })
        },
        addOrder:function(goodsId,goodsName,count,price){
            var _this=this;
            let datas={
                "userId":_this.userId,
                "userName":_this.userName,
                "goodsId":goodsId,
                "goodsName":goodsName,
                "count":count,
                "price":_this.getTotal
                }
           axios.post('/api/order/addorder',qs.stringify(datas)).then(function(res){
               console.log(res.data.msg)
               _this.$router.push("/order")
           })
        }
    },
    computed: {
         isSelectAll:function(){
             var _this=this
               if(_this.productList!=null){
                    return this.productList.every(function (val) { return val.isSelect});
               }
        },
        getTotal:function(){
			var _this=this
            if(_this.productList!=null){
                var numt=0;
                var prolist = _this.productList.filter(function (val) { return val.isSelect})
				for (var i = 0,len = _this.productList.length; i < len; i++) {
					numt+=_this.productList[i].goodsPrice* _this.productList[i].goodsCount;
				}
				return numt
            }
		},
    },
}
</script>
<style lang="">
    
</style>