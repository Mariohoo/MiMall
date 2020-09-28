<template>
    <div class="detail">
        <nav-header></nav-header>
        <product-param :title="product.name"></product-param>
        <div class="wrapper">
            <div class="container clearfix">
                <div class="swiper fl">
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <img src="/imgs/detail/phone-1.jpg" alt="">    
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/imgs/detail/phone-2.jpg" alt="">    
                        </swiper-slide> 
                        <swiper-slide>
                            <img src="/imgs/detail/phone-3.jpg" alt="">    
                        </swiper-slide> 
                        <swiper-slide>
                            <img src="/imgs/detail/phone-4.jpg" alt="">    
                        </swiper-slide> 
                         <!-- Optional controls -->
                        <div class="swiper-pagination" slot="pagination"></div>

                    </swiper>
                </div>
                <div class="content fr">
                    <h2 class="item-title">{{product.name}}</h2>
                    <p class="item-info">
                         相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
                         <br />外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
                    </p>
                    <div class="delivery">小米自营</div>
                    <div class="item-price">
                        {{product.price}}元
                        <span class="del">2999元</span>
                    </div>
                    <div class="line"></div>
                    <div class="item-addr">
                        <i class="icon-loc"></i>
                        <div class="addr">北京 北京市 朝阳区 安定门街道</div>
                        <div class="stock">有现货</div>
                    </div>
                    <div class="item-version">
                        <h2>选择版本</h2>
                        <div class="phone fl" :class="{'checked': version==1}" @click="version=1">6GB+64GB 全网通</div>
                        <div class="phone fr" :class="{'checked': version==2}" @click="version=2">4GB+64GB 移动4G</div>
                    </div>
                    <div class="item-color">
                        <h2>选择颜色</h2>
                        <div class="phone checked">
                            <span class="color"></span>
                            深灰色
                        </div>
                    </div>
                    <div class="item-total">
                        <div class="phone-info clearfix">
                            <div class="fl">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
                            <div class="fr">{{product.price}}元</div>
                        </div>
                        <div class="phone-total">总计：{{product.price}}元</div>
                    </div>
                    <div class="btn-group">
                        <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="container">
                <h2>价格说明</h2>
                <div class="desc">
                    <img src="/imgs/detail/item-price.jpeg" alt="">
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <!-- <modal
        title="提示"
        sureText="查看购物车"
        btnType='1'
        modalType="middle"
        v-on:cancel="showModal=false"
        v:on:submit=goTocart()
        :showModal="showModal"
        ></modal> -->
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import ProductParam from './../components/ProductParam'
import ServiceBar from './../components/ServiceBar'
// import Modal from './../components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    name:'detail',
    components:{
        NavFooter,
        NavHeader,
        ProductParam,
        ServiceBar,
        // Modal,
        Swiper,
        SwiperSlide
    },
    data(){
        return{
            showModal:false,
            product:{},
            swiperOption: {
                autoplay: true,
                pagination: {
                el: ".swiper-pagination",
                clickable: true
                }
            },
            version:1
        }
    },
    mounted(){
        this.getProductInfo()
    }
    ,
    methods:{
        getProductInfo(){
            let id = this.$route.params.id
            this.axios.get(`/products/${id}`).then(res=>{
                this.product = res
            })
        },
        addCart(){
            this.axios.post('/carts',{
                productId:this.$route.params.id,
                selected:true
            }).then((res={cartProductVoList:0})=>{
               this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                this.$router.push('/cart')
            })
        },
        goTocart(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/button.scss';

.detail{
    .wrapper{
        .swiper{
            @include wh(643px,617px);
            margin-top: 5px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            @include wh(583px,870px);
            .item-title{
                font-size: $fontC;
                padding-top: 30px;
                padding-bottom: 16px;
                height: 26px;
            }
            .item-info{
                @include hf(36px,$fontJ);
            }
            .delivery{
                @include hf(15px,$fontI);
                color: $colorA;
                margin-top: 26px;
                margin-bottom: 14px;
            }   

            .item-price{
                @include hf(19px,$fontG);
                color: $colorA;
                .del{
                    font-size: $fontI;
                    color: $colorD;
                    margin-left: 10px;
                    text-decoration: line-through;
                }
            }
            .line{
                height: 0;
                margin-top: 25px;
                margin-bottom: 28px;
                @include bd();
            }
            .item-addr {
                position: relative;
                @include bd();
                @include hl(108px,14px);
                background-color: #fafafa;
                font-size: $fontJ;
                box-sizing: border-box;
                padding-top: 31px;
                padding-left: 64px;
            }
            .addr{
                color: $colorC;
            }
            .stock{
                margin-top: 15px;
                color: $colorA;
            }
            .icon-loc{
                display: inline-block;
                position: absolute;
                top: 27px;
                left: 34px;
                width: 20px;
                height: 20px;
                background: url('/imgs/detail/icon-loc.png') no-repeat center;
                background-size: contain;
            }
        }
        .phone{
            @include bd();
            @include wh(287px,50px);
            line-height: 50px;
            font-size: $fontI;
            color: $colorB;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.6s,color 0.6s;
            &:hover{
                background-color: $colorA;
                color: $colorG;
            }
            &.checked{
                @include bd(1px,solid,$colorA);
                color: $colorA;
            }
        }
        .item-version{
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .item-color{
            .color{
                display: inline-block;
                @include wh(14px,14px);
                background-color: #666666;
            }
        }
        .item-total{
            @include hf(108px,$fontJ);
            background-color:#fafafa;
            padding: 24px 33px 29px 30px;
            margin-top: 50px;
            margin-bottom: 30px;
            box-sizing: border-box;
        }
        .phone-total{
            font-size: 24px;
            color: $colorA;
            margin-top: 18px;
        }
    }
    .price-info{
        background-color: $fontE;
        color: $colorB;
        padding-top: 38px;
        margin-bottom: 30px;
    }
}

</style>