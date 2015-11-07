'use strict'

/**
 * Search on twitter for an specific query
 * @memberof twttr
 * @static
 *
 * @example
 *  twttr.searchTopic(client, { q: 'potato' }).then(res => {})
 *
 * @param {object} client - the twttr client
 * @param {object} query
 *  @param {string} query.q - whatever we're looking for: text, hashtags, etc.
 * @return {promise} when resolved will return an array
 */

let searchTopic = (client, query) => {
  return new Promise((resolve, reject) => {
    client.get('search/tweets', {q: query}, (err, tweets, response) => {
      if (err) return reject(err)
      resolve(tweets)
    })
  })
}

module.exports = searchTopic
