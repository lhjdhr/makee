<template>
    <div>
        <div class="side-menu-wrap">
            <button class="side-menu-close"><span></span></button>
            <div class="side-menu-inner">

                <div class="side-logo"><a href="index.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/index.html"><img src="assets/images/logo.png" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/assets/images/logo.png" alt=""></a></div>

                <div class="side-menu nice-scroll">
                    <nav>
                        <ul>
                            <li class="menu-item-has-children"><a href="index.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/index.html">Home</a>
                                <ul class="sub-menu">
                                    <li><a href="index.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/index.html">Home One</a></li>
                                    <li><a href="index-2.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/index-2.html">Home Two</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="shop-left-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/shop-left-sidebar.html">Shop</a>
                                <ul class="sub-menu">
                                    <li><a href="shop-left-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li><a href="shop-full-width.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/shop-full-width.html">Shop Full Width</a></li>
                                    <li><a href="single-product.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-product.html">Single Product</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="#">Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="cart.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/cart.html">Cart</a></li>
                                    <li><a href="checkout.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/checkout.html">Checkout</a></li>
                                    <li><a href="login-register.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/login-register.html">Login Register</a></li>
                                    <li><a href="wishlist.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/wishlist.html">Wishlist</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="blog-left-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/blog-left-sidebar.html">Blog</a>
                                <ul class="sub-menu">
                                    <li><a href="blog-left-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    <li><a href="blog-full-width.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/blog-full-width.html">Blog Full Width</a></li>
                                    <li><a href="single-blog-left-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-blog-left-sidebar.html">Single Blog Left Sidebar</a></li>
                                    <li><a href="single-blog-right-sidebar.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/single-blog-right-sidebar.html">Single Blog Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="side-social">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                </div>

            </div>
        </div>

        <div class="side-menu-overlay"></div>

        <!-- Page Banner Section Start -->
        <div class="page-banner-section section bg-gray">
            <div class="container">
                <div class="row">
                    <div class="page-banner-content col text-center">
                        <h1>Checkout</h1>
                        <ul class="breadcrumb justify-content-center">
                            <li><a href="index.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/index.html">Home</a></li>
                            <li><a href="checkout.html" tppabs="http://www.17sucai.com/preview/1750631/2019-06-26/ds/checkout.html">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Banner Section End -->

        <!-- Checkout Page Start -->
        <div class="page-section section mt-100 mb-60 mt-xs-70 mb-xs-30">
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <!-- Checkout Form s-->
                        <div class="checkout-form">
                            <div class="row row-40">
                                <div class="col-lg-7">
                                    <!-- Billing Address -->
                                    <div id="billing-form" class="mb-20">
                                        <h4 class="checkout-title">Billing Infor</h4>
                                        <el-form :model="userInfor" status-icon :rules="rules" ref="userInfor" label-width="100px" class="demo-ruleForm">
                                            <el-form-item prop="userName" label="用户名">
                                                <el-input v-model="userInfor.userName"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="userAccount" label="账户">
                                                <el-input v-model="userInfor.userAccount"></el-input>
                                            </el-form-item>
                                            <el-form-item label="性别" prop="sex">
                                                <el-radio-group v-model="userInfor.sex">
                                                    <el-radio label="0">男</el-radio>
                                                    <el-radio label="1">女</el-radio>
                                                </el-radio-group>
                                            </el-form-item>
                                            <el-form-item label="密码" prop="password">
                                                <el-input type="password" v-model="userInfor.password" auto-complete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="info" @click="submitForm('userInfor')">修改</el-button>
                                                <el-button @click="resetForm('userInfor')">重置</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                    <h4 class="checkout-title">Billing Address</h4>
                                    <el-form :model="addressDate" status-icon :rules="rules2" ref="addressDate" label-width="100px" class="demo-ruleForm">
                                            <el-form-item prop="phone" label="手机号">
                                                <el-input v-model="addressDate.phone"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="address" label="地址">
                                                <el-input v-model="addressDate.address"></el-input>
                                            </el-form-item>    
                                            <el-form-item>
                                                <el-button type="info" @click="submitAddress('addressDate')">修改</el-button>
                                                <el-button type="info" @click="open('addressDate')">添加</el-button>
                                            </el-form-item>
                                        </el-form>
                                    <!-- Shipping Address -->
                                    <div id="shipping-form" class="mb-20">
                                        <h4 class="checkout-title">Shipping Address</h4>

                                        <div class="row">

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>First Name*</label>
                                                <input type="text" placeholder="First Name">
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>Last Name*</label>
                                                <input type="text" placeholder="Last Name">
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>Email Address*</label>
                                                <input type="email" placeholder="Email Address">
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>Phone no*</label>
                                                <input type="text" placeholder="Phone number">
                                            </div>

                                            <div class="col-12 mb-5">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="Company Name">
                                            </div>

                                            <div class="col-12 mb-5">
                                                <label>Address*</label>
                                                <input type="text" placeholder="Address line 1">
                                                <input type="text" placeholder="Address line 2">
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>Country*</label>
                                                <select class="nice-select">
                                                        <option>Bangladesh</option>
                                                        <option>China</option>
                                                        <option>country</option>
                                                        <option>India</option>
                                                        <option>Japan</option>
                                                </select>
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>Town/City*</label>
                                                <input type="text" placeholder="Town/City">
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>State*</label>
                                                <input type="text" placeholder="State">
                                            </div>

                                            <div class="col-md-6 col-12 mb-5">
                                                <label>Zip Code*</label>
                                                <input type="text" placeholder="Zip Code">
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-lg-5">
                                    <div class="row">

                                        <!-- Cart Total -->
                                        <div class="col-12 mb-40">

                                            <h4 class="checkout-title">User Infor</h4>

                                            <div class="checkout-cart-total">

                                                <h4>User <span>Infor</span></h4>

                                                <ul>
                                                    <li>userName <span>{{ userInfor.userName }}</span></li>
                                                    <li>userAccount  <span>{{ userInfor.userAccount }}</span></li>
                                                    <li> sex <span>{{ userInfor.sex }}</span></li>
                                                    <li> address <span>{{ addressDate.address }}</span></li>
                                                </ul>

                                                <p>
                                                    <!-- <el-button type="text" @click="open">添加收货地址</el-button> -->

                                                </p>
                                                <p>Shipping Fee <span>$00.00</span></p>

                                                <h4>Grand Total <span>$1250.00</span></h4>

                                            </div>

                                        </div>

                                        <!-- Payment Method -->
                                        <div class="col-12 mb-40">

                                            <h4 class="checkout-title">Payment Method</h4>

                                            <div class="checkout-payment-method">

                                                <div class="single-method">
                                                    <input type="radio" id="payment_check" name="payment-method" value="check">
                                                    <label for="payment_check">Check Payment</label>
                                                    <p data-method="check">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                </div>

                                                <div class="single-method">
                                                    <input type="radio" id="payment_bank" name="payment-method" value="bank">
                                                    <label for="payment_bank">Direct Bank Transfer</label>
                                                    <p data-method="bank">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                </div>

                                                <div class="single-method">
                                                    <input type="radio" id="payment_cash" name="payment-method" value="cash">
                                                    <label for="payment_cash">Cash on Delivery</label>
                                                    <p data-method="cash">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                </div>

                                                <div class="single-method">
                                                    <input type="radio" id="payment_paypal" name="payment-method" value="paypal">
                                                    <label for="payment_paypal">Paypal</label>
                                                    <p data-method="paypal">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                </div>

                                                <div class="single-method">
                                                    <input type="radio" id="payment_payoneer" name="payment-method" value="payoneer">
                                                    <label for="payment_payoneer">Payoneer</label>
                                                    <p data-method="payoneer">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                </div>

                                                <div class="single-method">
                                                    <input type="checkbox" id="accept_terms">
                                                    <label for="accept_terms">I’ve read and accept the terms & conditions</label>
                                                </div>

                                            </div>

                                            <button class="place-order">Place order</button>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Checkout Page End -->

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

                                <form id="mc-form" class="mc-form subscribe-form" >
                                    <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email" />
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
        <!-- Subscribe Section End -->
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        data() {
            return{
                addressDate: {
                    address: '',
                    phone: '',
                    userId: 0,
                },
                userInfor: {
                    userName: '',
                    userAccount: '',
                    sex: 0,
                    password: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    userAccount: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'blur'}
                    ]
                },
                rules2: {
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { min: 8, max: 11, message: '请输入正确手机号', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入收货地址', trigger: 'blur' }
                    ],
                },
            }
        },
        methods: {
            submitForm(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.change();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitAddress(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.changeAddress();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            change() {
                let self = this;
                this.$axios.put('/api/user/updateuser?'+qs.stringify(self.userInfor)).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.$message({
                            message: data.msg,
                            type: 'success'
                        });
                    }else {
                        self.$message({
                            message: data.msg,
                            type: 'error'
                        });
                    }
                }).catch(
                    function (error) {
                    console.log(error);
                })
            },
            changeAddress() {
                let self = this;
                this.$axios.put('/api/address/updatebyid?'+ qs.stringify(self.addressDate)).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.$message({
                            message: data.msg,
                            type: 'success'
                        });
                        self.resetForm(self.addressDate);
                    }else {
                        self.$message({
                            message: data.msg,
                            type: 'error'
                        });
                    }
                }).catch(
                    function (error) {
                    console.log(error);
                })
            },
            getInfor() {
                let users = localStorage.getItem('userAccount');
                let self = this;
                self.$axios.get("/api/user/findbyaccount?userAccount="+users
                ).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.userInfor = data.data;
                    } else {
                        self.$notify({
                            type: 'error',
                            message: data.msg,
                            duration: 2000,
                        });
                    }
                });
            },
            getAddress() {
                let users = localStorage.getItem('id');
                let self = this;
                self.$axios.get("/api/address/findbyuserid?userId="+users
                ).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.addressDate = data.data[0];
                    } else {
                        self.$notify({
                            type: 'error',
                            message: data.msg,
                            duration: 2000,
                        });
                    }
                });
            },
            open(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.addAddress();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            addAddress() {
                let users = localStorage.getItem('id');
                let self = this;
                self.addressDate.userId = users;
                let data = {};
                data.userId = users;
                data.address = self.addressDate.address;
                data.phone = self.addressDate.phone;
                this.$axios.post("/api/address/addaddress?"+qs.stringify(data)).then(function (response) {
                    var data = response.data;
                    if (data.code == 0) {
                        self.$message({
                            message: data.msg,
                            type: 'success'
                        });
                    } else {
                        self.$notify({
                            type: 'error',
                            message: data.msg,
                            duration: 2000,
                        });
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted() {
           this.getInfor();
           this.getAddress();
        }
    }
</script>