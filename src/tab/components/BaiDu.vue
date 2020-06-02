<template>
<div class="weibo module">
  <!-- <iframe target="frame" id="frame" src="https://m.weibo.cn"/> -->
  <card :title="'百度热点'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
const cheerio = require('cheerio')
const iconv = require('iconv-lite')

export default {
  name: 'BaiDu',
  data () {
    return {
      cards: [],
      logo: 'https://file.ipadown.com/tophub/assets/images/media/baidu.com.png',
      source: 'http://top.baidu.com/buzz?b=1&c=513&fr=topbuzz_b341_c513'
    }
  },
  components: {
    Card
  },
  methods: {},
  async mounted() {
    let apiUrl = 'https://tophub.today/n/Jb0vmloB1G'
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