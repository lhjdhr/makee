 <template>
    <div class='con'>
      <div class="navigationn">
         <span v-for="(item, index) in navs" @click="navChange(index)" :key='index'>
          <em> {{item.text}} </em>   
         </span>
    </div>     
    <div class="contentt">
       <div class="main">
        <div class='titleicon'><img  src="../../assets/images/icons/car.png" width='21px'>我的物流</div>
            <div class="itemm" v-for="item in orderAll[tabIndex]">
                <div class="titlee">
                    <div class="id">{{item.goodsName}}</div>
                    <div class="price" >¥{{item.price}}元</div> 
                    <div class="time" >{{item.time}}</div>   
                </div>
                <div class="payfor"><a @click="changeRouter(item.goodsId)">结算</a></div>
            </div>
        </div> 
    </div> 
     
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default{
    data() {
        return {
            navs:[ {'text': '全部订单',  }, { 'text': '待付款',},{'text': '已付款',}],
            orders: [],
            paymentsItem : [],//待付款
            receiptsItem :[],  //待收货 
            // returnsItem : [],//待归还
            // completesItem : [],  //已完成
            orderAll:[],//全部订单分类的集合
            tabIndex : 0,
            userName:localStorage.getItem("userName")
         }
    },
    methods:{
        getOrders(){
            var self=this;
            axios.get('/api/order/getorders?search='+self.userName).then(function(res){  
                var result =res.data.data;
                self.orders=result;
                 console.log("xfdsfsdself.orders")
                console.log(self.orders)
                self.orders.forEach(function(order){  //把所有不同状态的订单通过if判断push到相对应的订单状态集合中。
                    if(order.status == 0){
                        self.paymentsItem.push(order);
                    };
                    if(order.status == 3){
                        self.receiptsItem.push(order);
                    };
                    // if(order.status == 5){
                    //     self.returnsItem.push(order);
                    // };
                    // if(order.status == 13){
                    //     self.completesItem.push(order);
                    // }
                }); 
                self.orderAll = [ self.orders, self.paymentsItem, self.receiptsItem];;
            }) 
         },
        changeRouter(data) {
            this.$router.push({
                path: `/commit/${data}`,
            })
        },
        navChange(index){
             this.tabIndex = index;
        },
    },
    mounted(){
        this.getOrders()
    }
} 
</script>
<style>
.con{
    width:85%;
    margin:20px auto;
    padding-top:20px;
 
}
.navigationn{
     width:100%;
    display:flex;
    padding:10px;
   border:1px solid #eee
}
.navigationn span{
    flex:1;
    border-right:1px solid #eee;
    cursor:pointer
}
.contentt{
    width:100%;
    margin-top:50px;
}
.itemm{
    width:100%;
    height:120px;
    border:1px solid #eee;

}
.titleicon{
   width:100%;
   height:40px;
   line-height:40px;
   background:#eee;
   text-align:left;
    font-size:20px;
    padding-left:20px;
    
}
.titlee{
 padding-left:200px;
 text-align:left;
 float: left;
}
.payfor{
    width:100px;
    float:right;
    line-height: 40px;
    text-align: center;
    background: #eee;
    margin-top:40px;
    margin-right:200px;
    cursor: pointer;
}

</style>