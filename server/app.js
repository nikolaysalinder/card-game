const Koa = require("koa");
const config = require("config");
const mongoose = require("./libs/mongoose");
const User = require("./models/User");
const Router = require("koa-router");
const pick = require("lodash.pick");

const app = new Koa();

require("./handlers/01-favicon").init(app);
require("./handlers/02-static").init(app);
require("./handlers/03-logger").init(app);
require("./handlers/04-templates").init(app);
require("./handlers/05-errors").init(app);
require("./handlers/06-session").init(app);
require("./handlers/07-bodyParser").init(app);
require("./handlers/08-cors").init(app);

const usersRouter = new Router();

// const todosRouter = new Router({
//   prefix: '/todos'
// });

// todosRouter.get('/', async (ctx) => {});

// async function loadUser(ctx, next) => {
//   const id = ctx.params.userById;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     ctx.throw(404);
//   }
//
//   ctx.userById = await User.findById(id);
//
//   if (!ctx.userById) {
//     ctx.throw(404, 'user with this id not found');
//   }
//
//   await next();
// }

usersRouter
  .post("/new-user", async function (ctx) {
    const user = await User.create(pick(ctx.request.body, User.publicFields));
    ctx.body = user.toObject();
  })
  .get("/", async function (ctx) {
    const users = await User.find({});
    ctx.body = users.map((user) => user.toObject());
  });

app.use(usersRouter.routes());
// app.use(todosRouter.routes());

module.exports = app;
