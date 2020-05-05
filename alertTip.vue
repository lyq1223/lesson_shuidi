<template>
  <div class="alert_container">
      <section class="tip_text_container">
          <div class="tip_icon">
              <span></span>
              <span></span>
          </div>
          <p class="tip_text">{{alertText}}</p>
          <!-- 确定，点完后关闭它，怎么做？通知父组件，叫父组件把showAlert->false mvvm(子组件通知父组件)-->
         <div class="confirm" @click="closeTip">确认</div>
         <!-- 借助wui 有外界传进来alertText-->
      
      </section>
       
      
  </div>
</template>

<script>
// 数据驱动界面，数据只有data吗？ props是一个，这个数据由父组件传给子组件，因为需要才出现。
// data在通用组件中，最好是不要过多的有数据，作为一个子组件，或者通用组件来说，data会变成一个私有的数据
// 
export default {
    props:[
        'alertText'
    ], //外界给他什么，我们的alertTip就是外界传数据的 数据相关的不只有data，
    data(){ //是一个私有的数据，数据是页面级组件在派发给自组建的，所以会有data(私有)和props两种
        return {

        }
    },
    methods:{
        closeTip(){
            // showTip现在这里是改不了的，因为在父亲那边，那就要去通知父亲
            // $emit通知父亲,可以出发通知 
            this.$emit('closeTip') //App.vue怎么接收呢？
        }
    },
    computed(){//计算属性

    }
}
</script>

<style lang='stylus' scoped>
// scoped是不影响外面的，然后用命名系统，尽量不受外面影响
// 要是别人想修改样式？stylus是可以编译的，可以通过变量，生成不同风格 比如TabPane
@import '../../style/mixin';
.alert_container
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 200
  background-color rgba(0,0,0,.3)
  .tip_text_container
    position absolute
    top 50%
    left 50%
    margin-top -6rem
    margin-left -6rem
    width 12rem
    animation tipMove .4s
    background-color rgba(255, 255, 255, 1)
    border 1px
    padding-top 0.6rem
    display flex
    justify-content center
    align-items center
    flex-direction column
    border-radius 0.25rem
    .tip_icon
      wh(3rem, 3rem)
      border 0.15rem solid #f8cb86
      border-radius 50%
      display flex
      justify-content center
      align-items center
      flex-direction column
      span:nth-of-type(1)
        wh(.12rem, 1.5rem)
        background-color #f8cb86
      span:nth-of-type(2)
        wh(.2rem, .2rem)
        border 1px
        border-radius 50%
        margin-top 0.2rem
        background-color #f8cb8b
    .confirm
        border 1px solid #cbcbbc
        border-radius 0.2em
</style>