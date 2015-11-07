'use strict'

const tape = require('tape')
const _ = require('lodash')

const Twitter = require('twitter')
const twitterOpts = require('../auth.json')
const client = new Twitter(twitterOpts)
const twttr = require('../twttr/')

let fixtures = {}
let tests = []
let next = () => tests.shift()()

tests.push(() => {
  tape('Twitter connection is up', (t) => {
    t.plan(1)

    t.assert(client, 'Twitter client should exists')

    next()
  })
})

tests.push(() => {
  tape('getTrendingTopics()', (t) => {
    t.plan(3)

    twttr.getTrendingTopics(client).then((topics) => {
      t.assert(_.isArray(topics), 'The result should be an array')
      t.notEqual(topics.length, 0, 'The result array should be populated')
      t.equal(typeof topics[0], 'string', 'Should be populated with strings')

      fixtures.topics = topics
      next()
    })
  })
})

tests.push(() => {
  tape('searchTopic()', (t) => {
    t.plan(2)

    let topic = fixtures.topics[0]

    twttr.searchTopic(client, topic).then((tweets) => {
      t.assert(_.isObject(tweets), 'The result is an object')
      t.assert(_.isArray(tweets.statuses), 'The result have an array of statuses')

      fixtures.tweets = tweets
      next()
    })
  })
})

tests.push(() => {
  tape('transformTweets()', (t) => {
    t.plan(8)

    let statuses = twttr.transformTweets(fixtures.tweets)
    let status = statuses[0]

    t.assert(_.isArray(statuses), 'The result is an array')
    t.assert(_.isObject(status), 'The result is populated with object')
    t.assert(_.isString(status.lang), 'Each object has a {string} lang')
    t.assert(_.isDate(status.date), 'Each object has a {date} date')
    t.assert(_.isString(status.text), 'Each object has a {string} text')
    t.assert(_.isNumber(status.retweets), 'Each object has a {number} retweets')
    t.assert(_.isNumber(status.favs), 'Each object has a {number} favs')
    t.assert(_.isString(status.source), 'Each object has a {string} source')
  })
})

next()
