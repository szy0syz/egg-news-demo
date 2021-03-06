'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth({ title: 'auth middleware' });

  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.post('/login', controller.home.handleLogin);
  router.get('/loginIn', controller.home.loginIn);
  router.get('/loginOut', controller.home.loginOut);

  router.get('/cookie', controller.cookie.index);
  router.get('/session', controller.session.index);

  router.get('/form', auth, controller.form.index);
  router.post('/form', controller.form.handle);

  router.get('/news', controller.news.index);
  router.get('/news/:aid', controller.news.detail);
};
