<template>
  <div class="selected">
    <span>{{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    selected: {
      type: String,
    },
  },
};
</script>
<style  scoped>
.selected {
  position: relative;
  height: 30px;
}
.selected::after {
  content: "";
  width: 50%;
  height: 2px;
  background-color: rgb(218, 129, 218);
  display: block;
  position: absolute;
  top: 49%;
  left: 25%;
}
.selected span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 10px;
  background-color: #fff;
  line-height: 30px;
  z-index: 2;
}
</style>