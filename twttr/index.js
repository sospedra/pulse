'use strict'

/**
 * @typedef {object} twttrStatuses
 * @memberof twttr
 * @instance
 *
 * @property {string} lang - the language of the status
 * @property {date} date - when the status was published
 * @property {string} text - the content of the status
 * @property {number} retweets - how many times this status has been retweeted
 * @property {number} favs - how many times this status has been favorited
 * @property {string} source - show the link inside the status
 */

/**
 * The collection of methods that works against the Twitter API
 * @module twttr
 */

let twttr = module.exports = {}

twttr.openStream = require('./openStream')
twttr.searchTopic = require('./searchTopic')
twttr.getTrendingTopics = require('./getTrendingTopics')
twttr.transformTweets = require('./transformTweets')
