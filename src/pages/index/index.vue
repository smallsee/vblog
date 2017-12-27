<template>
    <div class="kkz">
      <m-header></m-header>
      <div class="brands brands-mask" :style="{ height: height + 'px'}"></div>
       <div class="brands-box">
          <h1 class="brands-title">Welcome To xiaohai's Blog</h1>
          <p class="brands-desc">I am a slow walker, but I never walk backwards...</p>
        </div>
    </div>
</template>

<script>
    import MHeader from 'components/header/header'
    export default {
      data() {
          return {
            height: document.documentElement.clientHeight
          }
      },
      mounted() {
          const that = this;
          window.onresize = function temp() {
              that.height = document.documentElement.clientHeight;
          };
      },
      components: {
        MHeader,
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../common/sass/variable';
  .brands{
    width: 100%;
    position: relative;
    z-index: -1;
    background: url(http://cache.iwanli.me/iwanli/imagebg.jpg?imageslim) center center no-repeat;
    background-size: cover;
    text-align: center;
  }
  .brands-mask{
       &:before{
      position: absolute;
      left: 0;
      z-index: 10;
      background: rgba(52,52,60,.3);
      top: 0;
      width: 100%;
      height: 100%;
      content: " ";
    }
  }
    .brands-box{
      box-sizing: border-box;
      width: 100%;
      margin-top: -45px;
      position: absolute;
      top: 50%;
      text-align: center;
    }
    .brands-title{
      font-size: 50px;
      color: $color-nav-text_active;
      font-weight: 300;
      line-height: 1.4;
    }
  .brands-desc{
       line-height: 1.4;
    font-size: 14px;
    color: $color-nav-text_active;
  }
</style>
