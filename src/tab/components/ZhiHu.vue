<template>
<div class="weibo module">
  <!-- <iframe target="frame" id="frame" src="https://m.weibo.cn"/> -->
  <card :title="'知乎热榜'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
export default {
  name: 'ZhiHu',
  data () {
    return {
      cardListInfo: {},
      cards: [],
      logo: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/6709c93d70cf3bc71923c096d200baa1cd112aac.jpg',
      source: 'https://www.zhihu.com/hot'
    }
  },
  components: {
    Card
  },
  methods: {},
  mounted() {
    this.$_get('https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total',
      {
        limit: 50,
        desktop: true
      }).then(res => {
        this.cards = res.data.data.map(item => {
          return {
            title: item.target.title,
            hotCount: item.detail_text,
            link: 'https://www.zhihu.com/question/' + item.target.id
          }
        })
      })
    
  }
}
</script>
<style scoped lang='scss'>
.weibo {
}
</style>