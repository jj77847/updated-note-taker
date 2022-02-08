// Router from Express.
const { Router } = require("express");

const apiRoutes = require("./api/apiRoute");

const viewRoutes = require("./view/viewRoute");

// create Router
const router = Router();

// Api Endpoint
router.use("/api", apiRoutes);

router.use("/", viewRoutes);

module.exports = router;
