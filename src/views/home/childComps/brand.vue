<template>
  <ul class="brand">
    <li v-for="item in brandList" :key="item.id">
      <img :src="item.pic_url" alt="" />
      <h5>{{ item.name }}</h5>
      <p>{{ item.floor_price.toFixed(2) + " ￥" }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    brandList: {
      type: Array,
    },
  },
};
</script>
<style  scoped>
.brand {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.brand li {
  width: 49%;
  padding-bottom: 3px;
  position: relative;
}
.brand li img {
  /* 调整图片亮度 */
  filter: brightness(0.9);
  width: 100%;
}
.brand li h5 {
  position: absolute;
  top: 10px;
  left: 10px;
}
.brand li p {
  position: absolute;
  left: 10px;
  top: 30px;
  font-size: 16px;
  color: darkred;
}
</style>