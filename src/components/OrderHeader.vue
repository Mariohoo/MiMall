<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'order-header',
    props:{
        title:{
            type:String
        }
    },
    computed:{
        username(){
            return this.$store.state.username
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.order-header{
    padding: 30px 0;
    .container{
        .header-logo{
            float: left;
            background-color: #FF6600;
            display: block;
            width: 55px;
            height: 55px;
                a{ 
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &::before{
                        content: ' ';
                       @include bgImg(55px,55px,'/imgs/mi-logo.png');
                        /* // display: inline-block;
                        // width: 55px;
                        // height: 55px;
                        // background:url('/imgs/mi-logo.png') no-repeat center;
                        // background-size: contain; */
                         transition: margin .2s;
                    }
                      &::after{
                        content: ' ';
                        @include bgImg(55px,55px,'/imgs/mi-home.png');
                        /* // display: inline-block;
                        // width: 55px;
                        // height: 55px;
                        // background:url('/imgs/mi-home.png') no-repeat center;
                        // background-size: contain; */
                      }
                     &:hover::before{
                         margin-left: -55px;
                         transition: margin .2s;
                        }
                }
        }
        .title, .username{
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .title{
            font-size: 28px;
            float: left;
            color: #333;
            margin-left: 54px;
            span{
                font-size: 14px;
                color: #999999;
                margin-left: 17px;
                font-weight: bold;
            }
        }
        .username{
            float: right;
            a{
                color: #666;
                font-size: 16px;
            }
        }
    }
}
</style>