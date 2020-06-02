<template>
<div class="weibo module">
  <card :title="'IT之家'" :list="cards" :logo="logo" :source="source"/>
</div>
</template>
<script>
import {apiRequest} from '../http'
import Card from './base/Card'
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
import axios from 'axios'

export default {
  name: 'IT',
  data () {
    return {
      cardListInfo: {},
      cards: [],
      logo: 'https://file.ipadown.com/tophub/assets/images/media/ithome.com.png',
      source: 'https://www.ithome.com/'
    }
  },
  components: {
    Card
  },
  methods: {},
  mounted() {
    let apiUrl = 'https://www.ithome.com'
    this.$_get(apiUrl).then((response) => {
        const $ = cheerio.load(response.data, {decodeEntities: false})
        let list = $('.hot-list').find('.bx').first().find('a')
        this.cards = Array.from(list).map(item => {
          return {
            title: item.attribs.title,
            link: item.attribs.href
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