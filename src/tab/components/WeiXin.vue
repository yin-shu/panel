<template>
<div class="weibo module">
  <card :title="'微信24h热文榜'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
import axios from 'axios'

export default {
  name: 'WeiXin',
  data () {
    return {
      cardListInfo: {},
      cards: [],
      logo: 'https://file.ipadown.com/tophub/assets/images/media/mp.weixin.qq.com.png',
      source: ''
    }
  },
  components: {
    Card
  },
  methods: {},
  mounted() {
    let apiUrl = 'https://tophub.today/n/WnBe01o371'
    this.$_get(apiUrl).then((response) => {
        const $ = cheerio.load(response.data, {decodeEntities: false})
        let domList = $('body').find('tbody').first().find('tr')
        this.cards = Array.from(domList).map(item => {
          return {
            title: $($(item).find('td')[1]).find('a').text(),
            link: $($(item).find('td')[1]).find('a')[0].attribs.href,
            hotCount: $($(item).find('td')[2]).text().split('阅读')[0]
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