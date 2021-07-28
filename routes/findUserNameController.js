const router = require("express").Router();
const fetch = require("node-fetch");

const getUserNameStatus = async (req, res) => {
  const {user_name} = req.body;
  const instagramResponse = await fetch(
    `http://www.instagram.com/${user_name}`,
    {
      method: "GET",
    }
  );
  const twitterResponse = await fetch(
    `http://www.twitter.com/${user_name}`,
    {
      method: "GET",
    }
  )
  const githubResponse = await fetch(
    `http://www.github.com/${user_name}`,
    {
      method: "GET",
    }
  )
  var response = {
    instagram: {},
    twitter: {},
    github: {}
  };
  if (instagramResponse.status === 404) {
    response.instagram.message = "not found";
    response.instagram.isFound = false;
  } else {
    response.instagram.message = "found";
    response.instagram.isFound = true;
  }
  if (twitterResponse.status === 404) {
    response.twitter.message = "not found";
    response.twitter.isFound = false;
  } else {
    response.twitter.message = "found";
    response.twitter.isFound = true;
  }
  if (githubResponse.status === 404) {
    response.github.message = "not found";
    response.github.isFound = false;
  } else {
    response.github.message = "found";
    response.github.isFound = true;
  }
  res.send({ data: response });
}
router.post('/', getUserNameStatus);

module.exports = router;