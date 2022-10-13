<template>
  <div
    class="page-container"
    style="width: 100vw; height: 100px; background: red"
  >
    <div class="view-text">这是home</div>
  </div>
</template>

<script>
// import {} from ''
// import xx from ''
// const xxx = require('')
export default {
  mixins: [],
  components: {},
  model: {
    // prop: "show",
    // event: "change",
  },
  data() {
    return {};
  },
  props: {},
  watch: {
    // any: {
    //   handler(value, oldValue) {},
    //   deep: true,
    //   immediate: true,
    // },
    // sm(value) {},
  },
  computed: {
    // name() {
    //   return this.data;
    // },
  },
  created() {},
  mounted() {},
  methods: {},
  updated() {},
  destroyed() {},
  activated() {},
  deactivated() {},
};
</script>

<style lang="scss" scoped>
@import "@/common/styles/base.scss";

.page-container {
  .view-text {
    color: $mp-main-color;
  }
}
</style>