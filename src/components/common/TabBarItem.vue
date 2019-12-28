<template>
      <div class="tar-bar-item" @click="btnClick">
          <div v-if="!isActive"><slot name="item-icon"></slot></div>
          
          <div v-else><slot name="item-icon-active"></slot></div>
          <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
          <div :style="colorActive"><slot name="item-text"></slot></div>
        <!-- <img src="../../assets/img/tabbar/home.svg" alt />
        <div>首页1</div> -->
      </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props:{
        path: String,
        selectColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return{
            // isActive: true,
        }
    },
    computed:{
        // <!-- 只有被点击的组件变红 -->
        isActive(){
            return this.$route.path==this.path
        },
        colorActive(){
            return this.isActive?{color:this.selectColor}:{}
        }
    },
    methods:{
        // <!-- // 判断以下点击的路由是否是当前活跃的路由，
        // 否则连续点击两次相同的按钮控制台会报错。 -->
        btnClick(){
            if(this.$route.path!=this.path){
                this.$router.replace(this.path)
            }
        }
    }
}
</script>

<style>
    .tar-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tar-bar-item img{
      height: 24px;
      width: 24px;
      margin-top: 3px;
      /* 去除图片底部与文字的间隙 */
      vertical-align: middle;
  }
  .active{
      color: red;
  }
</style>