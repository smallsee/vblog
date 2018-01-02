<template>
    <div class="kkz">
      <m-header></m-header>
      <div class="brands brands-mask" :style="{ height: height + 'px'}"></div>
       <div class="brands-box">
          <h1 class="brands-title">Welcome To xiaohai's Blog</h1>
          <p class="brands-desc">I am a slow walker, but I never walk backwards...</p>
        </div>
      <div class="w about-me">
        <h1 class="about-info">Story About Me</h1>
        <h1 class="about-title">碎碎念念的话，伴随着成长</h1>
        <p class="about-desc">时间真的好快，嗖的一下就长成了今天这模样。永远不会像《挪威森林》村上写的那一句话：一直以为十八岁之后是十九岁，十九岁后是十八岁，如此反复。如今说好的十八岁离开好几年了，好宅不代表着我老，如果认真的去做的更好，只是个开始。如今过的日子并不好过的话，完全可以付出更多的努力再来活一次，找到真正想要的自己。

执着的去做，不怕舍不得睡觉、玩乐、安逸的时间去拼，要知道现在的痛苦和难受都是以前放弃了太多努力。所以现在要抓紧努力，哪怕需要你花全部精力。去拼，如果没有天分，就用时间去换，走得再慢也不要后退。希望再过几年真的被喊叔叔的年纪，那时候回头感谢一下现在选择拼搏的我。

没有天分，就用时间去换......</p>
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
  .about-me{
    width: 720px;
    background-color: $color-background;
    margin-top: -100px;
    text-align: center;
    padding: 60px 40px 10px 40px;
    .about-info{
      font-size: 30px;
      font-weight: 600;
      color: $color-text-black
    }
      .about-title{
      margin-top: 30px;
      font-size: 16px;
      font-weight: 600;
      color: $color-text-purple;
    }
    .about-desc{
      margin-top: 30px;
      font-size: 13px;
      color: $color-text-black;
      line-height: 20px;
      margin-bottom: 20px;
    }

  }
</style>
