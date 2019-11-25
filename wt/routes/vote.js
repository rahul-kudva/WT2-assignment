const express = require("express");
const router = express.Router();
const PusherServerConfig = require("../config/config");

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: PusherServerConfig.appId,
  key: PusherServerConfig.key,
  secret: PusherServerConfig.secret,
  cluster: PusherServerConfig.cluster,
  encrypted: PusherServerConfig.encrypted
});

// Default GET route.
router.get("/", (req, res) => {
  res.send("You are in /vote.");
});

// Default POST route.
router.post("/", (req, res) => {
  pusher.trigger('hp-voting', 'hp-house', {
    "points": 1,
    "house": req.body.house
  });

  return res.json({
    "success": true,
    "message": "Thanks for voting."
  });
});

// Export the router.
module.exports = router;