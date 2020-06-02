<template>
  <div class="container">
    <jue-jin/>
    <wei-bo/>
    <zhi-hu/>
    <com-it/>
    <bai-du/>
    <wei-xin/>
    <V2EX/>
    <bili-bili/>
  </div>
</template>

<script>
import {apiRequest} from './http'
import JueJin from './components/JueJin'
import WeiBo from './components/WeiBo'
import ZhiHu from './components/ZhiHu'
import BaiDu from './components/BaiDu'
import IT from './components/IT'
import WeiXin from './components/WeiXin'
import V2EX from './components/V2EX'
import BiliBili from './components/BiliBili'

export default {
  data () {
    return {
      message: "My new tab page",
      list: []
    }
  },
  components: {
    JueJin,
    WeiBo,
    ZhiHu,
    BaiDu,
    'com-it': IT,
    WeiXin,
    V2EX,
    BiliBili
  },
  mounted() {
    // apiRequest.get('/test/testFunc')
    // .then(res => {
    //   console.log(res)
    //   let data = res.data
    //   this.list = data.articleFeed.items.edges
    //   console.log(JSON.parse(data))
    // })
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: 20px;
}
.container {
  // background-color: #555;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: url('https://api.ooopn.com/image/bing/api.php?type=jump&v=2');
}
</style>
<style lang="scss">
@import './assets/css/common.scss';
</style>