const router = require("express").Router();
const applianceController = require("./../controller/appliances");
router.post("/", (req, res) => {
  applianceController
    .addData(req.body)
    .then((myRes) => {
      res.send(myRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/", (req, res) => {
  applianceController
    .getData()
    .then((myRes) => {
      res.send(myRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
