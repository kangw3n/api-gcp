const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  return res.json({
    state: true,
    message: 'GCP API-Services Available 2',
  });
});

app.get('/tasks/ivpmail', async (req, res) => {
  let status = await fetch('https://ivftpe.com/api/scheduler.php').then(res =>
    res.json()
  );
  console.log('calling ivpmail task');
  return res.json({
    state: status.status,
    total: status.total,
  });
});

app.get('/tasks/croncheck', async (req, res) => {
  console.log('calling daily minute task');
  return res.json({
    state: true,
  });
});

(async () => {
  console.log('start my node version');
  app.listen(process.env.PORT || 8080);
})();
