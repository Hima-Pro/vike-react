import express from "express";
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {

  res.json({
    "ok": true
  })
});

const API = (app) => {

  return {
    middleware: router
  };
};

export default API;