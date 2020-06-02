<template>
<div class="weibo module">
  <card :title="'哔哩哔哩全站热榜'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
import axios from 'axios'

export default {
  name: 'BiliBili',
  data () {
    return {
      cardListInfo: {},
      cards: [],
      logo: 'https://file.ipadown.com/tophub/assets/images/media/bilibili.com.png',
      source: ''
    }
  },
  components: {
    Card
  },
  methods: {},
  mounted() {
    let apiUrl = 'https://tophub.today/n/74KvxwokxM'
    this.$_get(apiUrl).then((response) => {
        const $ = cheerio.load(response.data, {decodeEntities: false})
        let domList = $('body').find('tbody').first().find('tr')
        this.cards = Array.from(domList).map(item => {
          return {
            title: $($(item).find('td')[1]).find('a').text(),
            link: $($(item).find('td')[1]).find('a')[0].attribs.href,
            hotCount: $($(item).find('td')[2]).text()
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