<template>
<div class="weibo module">
  <!-- <iframe target="frame" id="frame" src="https://m.weibo.cn"/> -->
  <card :title="'微博热搜'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
export default {
  name: 'WeiBo',
  data () {
    return {
      cardListInfo: {},
      cards: [],
      logo: 'https://file.ipadown.com/tophub/assets/images/media/s.weibo.com.png',
      source: 'https://s.weibo.com/top/summary/'
    }
  },
  components: {
    Card
  },
  methods: {},
  mounted() {
    this.$_get('https://m.weibo.cn/api/container/getIndex',
      {
        containerid: '106003type=25&t=3&disable_hot=1&filter_type=realtimehot',
        title: '微博热搜',
        extparam: 'pos=0_0&mi_cid=100103&cate=10103&filter_type=realtimehot&c_type=30&display_time=1570681358',
        luicode: 10000011,
        lfid: 231583
      }).then(res => {
        this.cards = res.data.data.cards[0].card_group.map(item => {
          return {
            title: item.desc,
            hotCount: item.desc_extr,
            link: `https://s.weibo.com/weibo?q=%23${item.desc}%23&Refer=top`
          }
        })
      })
    
  }
}
</script>
<style scoped lang='scss'>
.weibo {
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>