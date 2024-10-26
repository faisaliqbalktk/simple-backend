require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubdata = // 20241026092055
// https://api.github.com/users/faisaliqbalktk

{
  "login": "faisaliqbalktk",
  "id": 185868728,
  "node_id": "U_kgDOCxQhuA",
  "avatar_url": "https://avatars.githubusercontent.com/u/185868728?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/faisaliqbalktk",
  "html_url": "https://github.com/faisaliqbalktk",
  "followers_url": "https://api.github.com/users/faisaliqbalktk/followers",
  "following_url": "https://api.github.com/users/faisaliqbalktk/following{/other_user}",
  "gists_url": "https://api.github.com/users/faisaliqbalktk/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/faisaliqbalktk/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/faisaliqbalktk/subscriptions",
  "organizations_url": "https://api.github.com/users/faisaliqbalktk/orgs",
  "repos_url": "https://api.github.com/users/faisaliqbalktk/repos",
  "events_url": "https://api.github.com/users/faisaliqbalktk/events{/privacy}",
  "received_events_url": "https://api.github.com/users/faisaliqbalktk/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-22T01:42:20Z",
  "updated_at": "2024-10-22T01:44:01Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('faisal developer in twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>this is login page</h1>')
})

app.get('/youtuber', (req, res) => {
    res.send('<h1>hello faisu youtuber</h1>')
})

app.get('/githubdata', (req, res) => {
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})