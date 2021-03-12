const express = require('express');

const app = express();

const { IncomingWebhook } = require('@slack/webhook');

// Read a url from the environment variables
const url =
  'https://hooks.slack.com/services/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';

// Initialize
const webhook = new IncomingWebhook(url);

var CronJob = require('cron').CronJob;
var job = new CronJob(
  '00 50 23 * * *',
  async function () {
    const d = new Date();
    console.log('Midnight Schedular run:', d);
    fetch('https://ivftpe.com/api/scheduler.php');
  },
  null,
  true,
  'Asia/Taipei'
);
job.start();

app.get('/', async (req, res) => {
  return res.json({
    state: true,
    message: 'GCP API-Services Available 2',
  });
});

(async () => {
  console.log('start my node version');
  app.listen(process.env.PORT || 8080);
})();
