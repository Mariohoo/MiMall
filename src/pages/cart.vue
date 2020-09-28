<template>
    <div class="cart">
        <order-header title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</span>
            </template>
        </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox" :class="{'checked': allChecked}" @click="toggleAll"></span>全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <!-- <loading></loading> -->
            <li class="cart-item" v-for="(item ,index) in list" :key="index"> 
              <div class="item-check">   
                <span class="checkbox"  :class="{'checked':item.productSelected}" @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt />
                <span>{{item.productName+','+ item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/">继续购物</a>
            共
            <span>{{list.length}}</span>件商品，已选择
            <span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：
            <span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
export default {
    name:'cart',
    components:{    
        OrderHeader,
        NavFooter,
        ServiceBar
    },
    data(){
        return {
            list:[], //商品列表
            allChecked:false, //是否全选
            cartTotalPrice:0, //商品总金额
            checkedNum:0 //选中商品的数量
        }
    },
    mounted(){
        this.getCartList()
    },
    methods:{
        getCartList(){
            this.axios.get('/carts').then((res)=>{
                this.list = res.cartProductVoList || []
                this.allChecked = res.selectedAll
                this.cartTotalPrice = res.cartTotalPrice
                this.checkedNum = this.list.filter(item =>{
                   return item.productSelected
                }).length
            })
        },
        toggleAll(){
            let url = this.allChecked? '/carts/unSelectAll':'/carts/selectAll';
            this.axios.put(url).then((res)=>{
                this.list = res.cartProductVoList || []
                this.allChecked = res.selectedAll
                this.cartTotalPrice = res.cartTotalPrice
                this.checkedNum = this.list.filter(item =>{
                   return item.productSelected
                }).length

            })
        },
        delProduct(item){
            this.axios.delete(`/carts/${item.productId}`).then((res)=>{
                this.list = res.cartProductVoList || []
                this.allChecked = res.selectedAll
                this.cartTotalPrice = res.cartTotalPrice
                this.checkedNum = this.list.filter(item =>{
                   return item.productSelected
                }).length
                this.$message.success('删除成功')
            })
        },
        order(){
            let isCheck = this.list.every(item => !item.productSelected);
            if(isCheck){
                this.$message.info('请选择一件商品')
            }else{
                this.$router.push('order/confirm')
            }
        },
        updateCart(item,type){
            let quantity = item.quantity
            let selected = item.productSelected
            if(type == '-'){
                if(quantity == 1){
                    this.$message.warning('商品至少保留一件')
                    return;
                }
                --quantity;
            }else if(type == '+'){
                if(quantity>item.productStock){
                    this.$message.warning('商品不能超过库存数量')
                }
                ++quantity;
            }else{
                selected = !item.productSelected
            }
            this.axios.put(`/carts/${item.productId}`,{
                quantity,
                selected
            }).then((res)=>{
                 this.list = res.cartProductVoList || []
                this.allChecked = res.selectedAll
                this.cartTotalPrice = res.cartTotalPrice
                this.checkedNum = this.list.filter(item =>{
                   return item.productSelected
                }).length
            })
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/button.scss';

.cart{
    .wrapper{
        background-color: $colorJ;
        padding-top: 33px;
        padding-bottom: 114px;
        .cart-box{
            background-color: $colorG;
            font-size: $fontJ;
            color: $colorD;
            text-align: center;
        
            .checkbox{
                display: inline-block;
                @include wh(22px,22px);
                @include bd();
                vertical-align: middle;
                margin-right: 17px;
                cursor: pointer;
                &.checked{
                    background: url("/imgs/icon-gou.png") $colorA no-repeat center;
                    background-size: 16px 12px;
                    border: none;
                }
            }
            .cart-item-head{
                display: flex;
                @include hl(79px,79px);
                .col-1{
                    flex: 1;
                }
                .col-2{
                    flex:2;
                }
                .col-3{
                    flex: 3;
                }
            }
            .cart-item-list{
                .cart-item{
                    display: flex;
                    align-items: center;
                    height: 125px;
                    border-top: 1px solid #e5e5e5;
                    font-size: $fontI;
                    .item-check{
                        flex: 1;
                    }
                    .item-name{
                        flex: 3;
                        font-size: $fontH;
                        color: $colorB;
                        display: flex;
                        align-items: center;
                        img{
                            @include wh(80px,80px);
                            vertical-align: middle;
                        }
                        span{
                            margin-left: 30px;
                        }
                    }
                    .item-price{

                        flex: 1;
                        color: $colorB;
                    }
                    .item-num{
                        flex: 2;
                        .num-box{
                            display: inline-block;
                            @include wh(150px,40px);
                            @include bd();
                            line-height: 40px;
                            font-size: $fontJ;
                            a{
                                display: inline-block;
                                width: 50px;
                                color: $colorB;
                            }
                            span{
                                display: inline-block;
                                width: 50px;
                                color: $colorB;
                            }
                        }
                    }
                    .item-total{
                        flex: 1;
                        color: $colorA;
                    }
                    .item-del{
                        flex: 1;
                        @include bgImg(14px,12px,"/imgs/icon-close.png");
                        cursor: pointer;
                    }
                }
            }
        }
        .order-wrap{
            @include hl(50px,50px);
            font-size: $fontJ;
            color: $colorC;
            margin-top: 20px;

            .cart-tip{
                margin-left: 29px;
                a{
                    color: $colorC;
                    margin-right: 37px;
                }
                span{
                    color: $colorA;
                    margin: 0 5px;
                }
            }
            .total{
                font-size: $fontJ;
                color: $colorA;
                span{
                    font-size: 24px;
                }
                a{
                    @include wh(202px,50px);
                    line-height: 50px;
                    font-size: $fontH;
                    margin-left: 37px;
                }
            }
        }
    }
}
</style>