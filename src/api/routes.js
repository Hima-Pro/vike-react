// import express from "express";
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json(req.headers);
});

const Routes = (app) => {

  return {
    middleware: router
  };
};

module.exports = Routes;