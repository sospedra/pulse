'use strict'

/**
 * Transform the output of search/statuses into our twttr insights
 * @memberof twttr
 * @static
 *
 * @param {object[]} tweets - the response from search/statuses
 * @returns {twttrStatuses} the collection of the tweets insights
 */

let transformTweets = (tweets) => {
  return tweets.statuses.map(status => ({
    lang: status.lang,
    date: new Date(status.created_at),
    text: status.text,
    retweets: status.retweet_count,
    favs: status.favorite_count,
    source: status.source
  }))
}

module.exports = transformTweets
