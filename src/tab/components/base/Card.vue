<template>
  <div class="card">
    <div class="head">
      <img class="logo" :src="logo"/>
      <span class="title">{{title}}</span>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span class="index" :class="{hot: index < 3}">{{index + 1}}</span>
        <a :href="item.link" target="_blank">{{item.title}}</a>
        <span class="count">{{item.hotCount}}</span>
      </li>
    </ul>
    <div class="foot">
      <a :href="source" target="_blank">查看更多>></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    },
    logo: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>
<style scoped lang='scss'>

.card {
  // background: #fff;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  .head {
    padding: 10px 15px;
    border-bottom: 1px solid rgba(178,186,194,.15);

    .logo {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .title {
      font-size: 18px;
      vertical-align: bottom;
      line-height: 30px;
    }
  }
  ul {
    height: 300px;
    overflow: scroll;
  }
  li {
    display: flex;
    padding: 5px 15px;
    font-size: 16px;
    .index {
      display: inline-block;
      width: 30px;
      text-align: left;
      color: #999;
      &.hot {
        color: red;
      }
    }
    a {
      flex: 1;
      display: inline-block;
      color: #2e3135;

      &:hover {
        color: #007fff;
      }
      &:visited {
        color: #909090;
      }
    }
    .count {
      color: #999;
    }
  }
  .foot {
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding: 0 20px;
    border-top: 1px solid rgba(178,186,194,.15);
  }
}
</style>