const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  return res.json({
    state: true,
    message: "GCP API-Services Available",
  });
});

app.listen(process.env.PORT || 8080);
