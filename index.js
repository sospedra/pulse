'use strict'

const Twitter = require('twitter')
const twitterOpts = require('./auth.json')
const client = new Twitter(twitterOpts)
const twttr = require('./twttr/')

twttr.getTrendingTopics(client).then((tt) => {
  tt.forEach((topic, idx) => {
    twttr.searchTopic(client, topic).then((tweets) => {
      let statuses = twttr.transformTweets(tweets)
      console.log(statuses)
    // insights: word count, graphos etc.
    })
  })
})
