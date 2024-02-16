const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

const githubData = {
  login: "HasnatKhalid",
  id: 95873135,
  node_id: "U_kgDOBbbobw",
  avatar_url: "https://avatars.githubusercontent.com/u/95873135?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/HasnatKhalid",
  html_url: "https://github.com/HasnatKhalid",
  followers_url: "https://api.github.com/users/HasnatKhalid/followers",
  following_url:
    "https://api.github.com/users/HasnatKhalid/following{/other_user}",
  gists_url: "https://api.github.com/users/HasnatKhalid/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/HasnatKhalid/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/HasnatKhalid/subscriptions",
  organizations_url: "https://api.github.com/users/HasnatKhalid/orgs",
  repos_url: "https://api.github.com/users/HasnatKhalid/repos",
  events_url: "https://api.github.com/users/HasnatKhalid/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/HasnatKhalid/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-12-09T16:18:58Z",
  updated_at: "2024-02-13T17:47:06Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hasnat-Khalid");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at hasnat</h1>");
});

app.get("/youtube", (rep, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/github", (rep, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
