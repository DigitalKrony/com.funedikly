import createError from 'http-errors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import glob from 'globule';

import { save } from '@df/utilities';

const _package = JSON.parse(fs.readFileSync(`package.json`).toString());

export const app = express();

app.use((_req: any, res: any, next: any) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // res.setHeader('Connection', '')
  res.shouldKeepAlive = false;

  // Pass to next layer of middleware
  next();
});

// view engine setup
app.set('views', [
  path.join(__dirname, 'server/templates'),
  path.join(__dirname, 'src/pages')
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.isDefined = (variable: string, defaultValue: string) => {
  if (typeof variable !== 'undefined')
    return variable;
  else if (typeof defaultValue !== 'undefined')
    return defaultValue;
  return 'UNDEFINED';
};

app.use((req: any, res: any, next: any) => {
  const cookies = req.cookies;
  const query = req.query;

  if (!cookies[_package.themeCookieName]) {
    res.cookie(_package.themeCookieName, `mwf`, { maxAge: 900000, httpOnly: true });
  } else if (query.theme && cookies[_package.themeCookieName] !== query.theme) {
    res.cookie(_package.themeCookieName, query.theme, { maxAge: 900000, httpOnly: true });
  }

  next();
});

app.use(`/assets`, express.static('./.tmp'));
app.use(`/assets`, express.static('./src/assets'));
app.use(`/assets`, express.static('./assets'));

app.use(`/_api/`, require('./server/_api/css'));
app.use(`/_api/`, require('./server/_api/img'));
app.use('/', require('./server/routes/index'));
app.use('/users/', require('./server/routes/users'));

// catch 404 and forward to error handler
app.use((_req: any, _res: any, next?: any) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, _next?: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const registerPartials = (appContext: any) => {
  let partials = glob.find([`src/**/partials/*.ejs`, `server/partials/*.ejs`]);

  for (let src of partials) {
    let partial = path.resolve(src);
    let meta = path.parse(partial);

    try {
      appContext.locals.components = appContext.locals.components || {};
      appContext.locals.components[meta.name] = partial;
    } catch (err) {
      console.log(`Failed to register ${meta.name} with error ${err}.`);
    }
  }

  console.log(`${partials.length} Partial(s) Registered.`);
};

registerPartials(app);

const buildServerMap = () => {
  let indexEndpoints: string[] = glob.find(['src/**/index.ejs', '!src/pages/index.ejs']);
  let pageEndpoints: string[] = glob.find(['src/pages/*.ejs', '!src/pages/index.ejs']);
  let navMap: any = { pages: [] };

  for (let page of pageEndpoints) {
    let pageFileData = path.parse(page);
    let pageLink = {
      title: pageFileData.name,
      url: `/${pageFileData.name}`
    };
    navMap.pages.push(pageLink);
  }

  for (let ep of indexEndpoints) {
    let epType = ep.split('/')[1];

    if (!navMap[epType]) {
      navMap[epType] = [];
    }

    let cleanLink = ep.split('/');
    cleanLink.shift();
    cleanLink.pop();
    let newUrl = `/${cleanLink.join('/')}`;

    let newLink = {
      title: cleanLink.pop(),
      url: newUrl
    };

    navMap[epType].push(newLink);
  }

  save('.tmp/data/serverMap.json', JSON.stringify(navMap));
};

buildServerMap();

var watchTimeout: ReturnType<typeof setTimeout> | null;

fs.watch(`./`, (eventType: string, filename: string | null) => {
  if (!watchTimeout) {
    if (typeof filename !== 'string') {
      watchTimeout = setTimeout(() => {
        watchTimeout = null;
      }, 10);

      return;
    }

    let ext = path.extname(filename);
    process.stdout.write(`${filename} has ${eventType}\n`);

    switch (ext) {
      case '.ejs':
        registerPartials(app);
        buildServerMap();
        break;
      case '.scss':
        break;
      case '.json':
        break;
      default:
        process.stdout.write('An unwatched file extension has changed.\n');
        break;
    }

    watchTimeout = setTimeout(() => {
      watchTimeout = null;
    }, 10);
  }
});
