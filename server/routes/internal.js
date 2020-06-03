const express = require('express');

const router = express.Router();

// Simulate server delayed response
function send (res, data) {
  setTimeout(() => {
    res.send(data);
  }, 2);
}

/**
 * Internal Api routes
 */

// routs
router.post(
  '/',
  (req, res) => send(res.status(200), { responseText: 'internal POST Tested' })
);

router.get(
  '/',
  (req, res) => send(res.status(200), { responseText: 'internal GET Tested' })
);


module.exports = router;
