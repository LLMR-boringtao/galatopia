import api from '../api'

const CronJob = require('cron').CronJob

export const cronJob = () => {
  const job = new CronJob('* * */6 * * *', function() {
    console.log('You will see this message every second')
    addNews()
  }, null, true, 'America/Los_Angeles')
  job.start()
}

async function addNews () {
  console.log('************Bing Add News Start***********')
  let categories = await api.category.findCategories()
  if (categories.length <= 0) {
    return
  }
  console.log(categories)
  for (let item of categories) {
    console.log(`-----------------开始 ${item.title} 分类--------------`)
    const res = await api.bing.findNews(item)
    console.log(res.data.length)
    if (res.success) { 
      await api.bing.saveNews(res.data, item)
    }
    console.log(`-----------------结束 ${item.title} 分类--------------`)
  }
  console.log('************Bing Add News End***********')
}
