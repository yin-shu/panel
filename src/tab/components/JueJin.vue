<template>
  <div class="juejin module">
    <card :title="title" :list="list" :logo="logo" :source="source"/>
  </div>
</template>

<script>
import {apiRequest} from '../http'
import Card from './base/Card'

export default {
  name: 'juejin',
  data () {
    return {
      title: "掘金热门",
      logo: 'https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg',
      list: [],
      source: 'https://juejin.im/timeline/recommended?sort=three_days_hottest'
    }
  },
  components: {
    Card
  },
  mounted() {
    this.$_post('https://web-api.juejin.im/query',
      {
        operationName:"",
        query:"",
        variables:{
            first:50,
            after:"",
            order:"THREE_DAYS_HOTTEST"
        },
        extensions:{
            query:{
                id:"21207e9ddb1de777adeaca7a2fb38030"
            }
        }
      }, {
        headers: {
          'X-Agent': 'Juejin/web',
          'Content-Type':  'application/json'
        },
        isJson: true
      }).then(res => {
        this.list = res.data.data.articleFeed.items.edges.map(item => {
          return {
            id: item.node.id,
            title: item.node.title,
            hotCount: item.node.likeCount,
            link: item.node.originalUrl
          }
        })
      })
    
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: 20px;
}
.juejin {
  // width: 400px;
  // margin-right: 30px;
}
</style>