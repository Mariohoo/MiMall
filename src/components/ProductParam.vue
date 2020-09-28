<template>
    <div class="nav-header" :class="{'isfixed':isTop}">
        <div class="container">
            <div class="left">
                {{title}}
            </div>
            <div class="right">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'product-param',
    props:{
        title:{
            type:String
        }
    },
    data(){
        return {
            isTop:false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initScroll)
    },
    methods:{
        initScroll(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop||window.pageYOffset;
            this.isTop = scrollTop>152? true:false;
        }
    },
    destoryed(){
        window.removeEventListener('scroll',this.initScroll,false)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.nav-header{
    z-index: 20;
    background-color: #ffffff;
    &.isfixed{
        position: fixed;
        width: 100%;
        top: 0;
        box-shadow: 0 5px 5px #cccccc;
    }
    height: 70px;
    line-height: 70px;
    border: 1xp solid $colorH;
    .container{
        @include flex();
        justify-content: space-between;
    .left{
            color: $colorB;
             font-weight: 700;
             font-size: $fontH;
    }
    .right{
        font-size: $fontJ;
        a{
            color: $colorC;
        }
        span{
            margin: 0 10px;
        }
    }
}
}
</style>