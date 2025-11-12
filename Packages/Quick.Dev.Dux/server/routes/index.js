const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const router = express.Router();

const qspToJson = (string) => {
  let object = {};
  let stringArray = string.split(",");

  for (let sub of stringArray) {
    let subSplit = sub.split(":");
    object[subSplit[0]] = subSplit[1];
  }

  return object;
};

router.get("/:dir*?", function (req, res, next) {
  let qsp = req.query;
  let headers = req.headers;
  let serverNav = {};

  if (qsp.css) {
    qsp.css = qspToJson(qsp.css);
  } else {
    qsp.css = {};
  }

  try {
    serverNav = JSON.parse(fs.readFileSync(`./.tmp/data/serverMap.json`));
  } catch (err) {
    console.log("ERROR: ", err);
  }

  let pageView = req._parsedOriginalUrl.pathname;
  pageView === "/"
    ? (pageView = "index")
    : (pageView = pageView.replace(new RegExp("/", "gi"), "/"));
  let pageViewParts = pageView.split("/");

  if (fs.existsSync(path.resolve(`./src/${pageView}/index.ejs`))) {
    let pageData = JSON.parse(
      fs.readFileSync(
        path.resolve(
          `./src/${pageView}/data/${
            pageViewParts[pageViewParts.length - 1]
          }.json`
        )
      )
    );

    let config = {
      theme: qsp.css.theme || "mwf",
      region: qsp.css.region || "west-europe",
      title: pageData.title,
      qsp: qsp,
      headers: headers,
      nav: serverNav,
      pageTemplate: path.resolve(`./src/${pageView}/index.ejs`),
      viewModel: pageData,
    };

    res.render(`component`, Object.assign(config, req.query));
  } else if (fs.existsSync(path.resolve(`./src/pages/${pageView}.ejs`))) {
    let pageData = JSON.parse(
      fs.readFileSync(path.resolve(`./src/pages/data/${pageView}.json`))
    );

    let config = {
      theme: qsp.css.theme || "mwf",
      region: qsp.css.region || "west-europe",
      title: pageData.title,
      qsp: qsp,
      headers: headers,
      nav: serverNav,
      pageTemplate: path.resolve(`./src/pages/${pageView}.ejs`),
      viewModel: pageData,
    };

    res.render("page", Object.assign(config, req.query));
  } else {
    next();
  }
});

module.exports = router;
