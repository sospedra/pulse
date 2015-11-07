module.exports = (client, track) => {
  client.stream('statuses/filter', {track}, (stream) => {
    stream.on('data', (tweet) => {
      console.log(tweet.text)
    })
    stream.on('error', (err) => {
      throw err
    })
  })
}
