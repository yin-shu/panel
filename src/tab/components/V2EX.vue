<template>
<div class="weibo module">
  <card :title="'V2EX今日热议'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
import axios from 'axios'

export default {
  name: 'V2EX',
  data () {
    return {
      cardListInfo: {},
      cards: [],
      logo: 'https://file.ipadown.com/tophub/assets/images/media/v2ex.com.png',
      source: 'https://www.v2ex.com/?tab=tech'
    }
  },
  components: {
    Card
  },
  methods: {},
  mounted() {
    let apiUrl = 'https://www.v2ex.com/?tab=tech'
    this.$_get(apiUrl).then((response) => {
        const $ = cheerio.load(response.data, {decodeEntities: false})
        let domList = $('#TopicsHot table')
        this.cards = Array.from(domList).map(item => {
          return {
            title: $(item).find('span a').text(),
            link: 'https://www.v2ex.com' + $(item).find('span a')[0].attribs.href
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