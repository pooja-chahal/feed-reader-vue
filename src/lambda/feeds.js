let Parser = require('rss-parser');

export function handler(event, context, callback) {
  const FEEDS = [
    'http://feeds.bbci.co.uk/news/rss.xml'
  ]

  let parser = new Parser()

  const feedRequests = FEEDS.map(feed => {
    return parser.parseURL(feed)
  })

  Promise.all(feedRequests).then(response=>{
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
}