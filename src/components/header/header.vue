<template>
    <header class="kkz-header">
      <div class="w flex-row-between header-box">
        <img class="logo" src="./logo.png" alt="">
        <nav class="nav">
          <a class="nav-item flex-row" href="#"> <i class="fa fa-home"></i> <p>首页</p></a>
        </nav>
      </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../common/sass/variable';

  .kkz-header{
    position: fixed;
    border: 1px solid  rgba(255,255,255,.5);
    top: 0;
    width: 100%;
    height: 90px;
    z-index: 10;
    .header-box{
      padding-top: 15px;
    }
    .logo{
      width: 85px;
      height: 45px;
    }
    .nav{
        margin-top: 20px;
    }
    .nav-item{
      padding: 5px 17px;
      font-size: 13px;
      font-weight: 500;
      color: $color-nav-text;
      background: 0 0;
      letter-spacing: 1px;
      transition: .4s all;
      p{
        margin-left: 10px;
      }
      i,p{
          display: block;
      }
      &:hover{
        background-color: $color-nav-text_active;
        color: mediumpurple;
      }
    }
  }
</style>
