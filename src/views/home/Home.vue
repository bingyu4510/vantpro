<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      height="200"
    >
      <van-swipe-item v-for="item in swipeImgLIst" :key="item.id">
        <img :src="item.image_url" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 精选 -->
    <selected :selected="selected" />
    <!-- 品牌精选列 -->
    <brand :brandList="brandList" />
  </div>
</template>

<script>
import brand from "./childComps/brand.vue";
import Selected from "../../components/common/selected/Selected.vue";
export default {
  data() {
    return {
      //输入框信息
      value: "",
      //轮播图
      swipeImgLIst: [],
      //精选信息
      selected: "精选商品",
      //品牌精选列表
      brandList: [],
    };
  },
  created() {
    //获取初始化数据
    this.getSwipeImg();
  },
  components: {
    Selected,
    brand,
  },
  methods: {
    async getSwipeImg() {
      const { data: res } = await this.$axios.get(
        // "https://mock.mengxuegu.com/mock/60699557e34b2e50a355ca72/test/home"
        "/index/index"
      );
      console.log(res);
      this.swipeImgLIst = res.data.banner;
      this.brandList = res.data.brandList;
    },
  },
};
</script>

<style  scoped>
.home {
  width: 100%;
  background-color: #fff;
}
.my-swipe img {
  width: 100%;
}
</style>