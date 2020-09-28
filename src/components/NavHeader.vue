<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">松果出行</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <!-- <a href="javascript:;" v-if="username" @click="logout">退出</a> -->

                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price}}元</div>
                                    </a>
                                </li>
                                 
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                           <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">红米1</div>
                                        <div class="pro-price">1700元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-2.png" alt="">
                                        </div>
                                        <div class="pro-name">红米3x</div>
                                        <div class="pro-price">1200元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3.png" alt="">
                                        </div>
                                        <div class="pro-name">红米4A</div>
                                        <div class="pro-price">1100元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">红米NOTE2</div>
                                        <div class="pro-price">1700元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-4.png" alt="">
                                        </div>
                                        <div class="pro-name">红米note4</div>
                                        <div class="pro-price">1600元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-5.png" alt="">
                                        </div>
                                        <div class="pro-name">红米note3</div>
                                        <div class="pro-price">1900元</div>
                                    </a>
                                </li>
                           </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米纯面屏电视E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">小米电视</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wapper">
                        <input type="text" name="keyworld">
                        <a href="javascript:;"></a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-header',
    data(){
        return {
            phoneList:[]
        }
    },
    computed:{
        username(){
            return this.$store.state.username
        },
        cartCount(){
            return this.$store.state.cartCount
        }
    },
    mounted(){
        this.getProductList()
    },
    methods:{
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012'
                }
            }).then((res)=>{
                if(res.list.length >6){
                    //数组中截取
                    this.phoneList = res.list.slice(0,6)
                }
            })
        },
        goToCart(){
            this.$router.push('/cart')
        },
        login(){
            this.$router.push('/login')
        },
        // logout(){
        //     this.axios.post('/user/logout').then(()=>{
        //         this.$message.success('退出成功')
        //         this.$cookie.set('userId','',{expires:'-1'});
        //         this.$store.dispatch('saveUserName','')
        //         this.$store.dispatch('saveCartCount','0')
        //     })
        // }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.header{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #b0b0b0;
    
        .container{
            @include flex();
            a {
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
            }
            .my-cart{
                width:110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;
                .icon-cart{
                     @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                    // display: inline-block;
                    // width: 16px;
                    // height: 12px;
                    // background:url('/imgs/icon-cart-checked.png') no-repeat center;
                    // background-size:contain;
                    margin-right: 4px;;
                }
            }
        }
    }
    .nav-header{
        margin-bottom: 42px;
        .container{
            position: relative;
            @include flex();
            height: 112px;
            .header-logo{
                background-color: #FF6600;
                display: inline-block;
                width: 55px;
                height: 55px;
                a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &::before{
                        content: ' ';
                       @include bgImg(55px,55px,'/imgs/mi-logo.png');
                        // display: inline-block;
                        // width: 55px;
                        // height: 55px;
                        // background:url('/imgs/mi-logo.png') no-repeat center;
                        // background-size: contain;
                         transition: margin .2s;
                    }
                    &::after{
                        content: ' ';
                        @include bgImg(55px,55px,'/imgs/mi-home.png');
                        // display: inline-block;
                        // width: 55px;
                        // height: 55px;
                        // background:url('/imgs/mi-home.png') no-repeat center;
                        // background-size: contain;
                    }
                     &:hover::before{
                         margin-left: -55px;
                         transition: margin .2s;
                     }
                }
            }
            .header-menu{
                display: inline-block;
                margin-left: 209px;
                width: 643px;
                .item-menu{
                    margin-right: 20px;
                    display: inline-block;
                    color: #333333;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 112px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        z-index: 50;
                        background-color: #ffffff;
                        transition: all .5s;
                        overflow: hidden;
                        height: 0;
                        opacity: 0;
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        border-top: 1px solid #e5e5e5;
                        box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
                        .product{
                            position: relative;
                            text-align: center;
                            font-size: 12px;
                            line-height: 12px;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            &::before{
                                content: ' ';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                width: 1px;
                                height: 100px;
                                border-left: 1px solid $colorF;
                            }
                            &:last-child::before{
                                display: none;
                            }
                            a{
                                display: inline-block;
                            }
                            img{
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 117px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wapper{
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    input{
                        box-sizing: border-box;
                        border: none;
                        border-right: 1px solid #E0E0E0;
                        height: 50px;
                        width: 264px;
                        padding-left: 14px;
                    }
                    a{  
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        // display: inline-block;
                        // width: 18px;
                        // height: 18px;
                        // background: url('/imgs/icon-search.png') no-repeat center;
                        // background-size: contain;
                        margin-left: 17px;
                    }
                }
            }
        }
    }
}
</style>