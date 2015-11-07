'use strict'

/**
 * Call Twitter to get the current trending topics around the world
 * @memberof twttr
 * @static
 * @param {object} client -  twttr client
 * @return {promise} when resolved will return an array
 */

let getTrendingTopics = (client) => {
  return new Promise((resolve, reject) => {
    client.get('trends/place', { id: 1 }, (err, trendsByPlace, res) => {
      if (err) return reject(err)
      let trends = trendsByPlace.shift().trends
      let trendingTopics = trends.map((topic) => topic.name)
      resolve(trendingTopics)
    })
  })
}

module.exports = getTrendingTopics
