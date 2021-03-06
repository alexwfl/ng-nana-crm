var Index = require('../app/controllers/index'),
    User = require('../app/controllers/user'),
    Domain = require('../app/controllers/domain'),
    Customer = require('../app/controllers/customer/customer'),
    Schedule = require('../app/controllers/customer/schedule'),
    Clue = require('../app/controllers/customer/clue'),
    Business = require('../app/controllers/customer/business'),
    Group = require('../app/controllers/customer/group'),
    Tag = require('../app/controllers/customer/tag'),
    Product = require('../app/controllers/product/product')
    Cate = require('../app/controllers/product/cate')
    Setting = require('../app/controllers/setting'),
    Quotation = require('../app/controllers/quotation/quotation'),
    Quotationhead = require('../app/controllers/quotation/quotationhead'),
    Quotationfoot = require('../app/controllers/quotation/quotationfoot'),
    Feedbackl = require('../app/controllers/feedbackl'),
    multipart = require('connect-multiparty'),
    multipartMiddleware = multipart()

module.exports = function(app){
	app.use(function(req, res, next) {
    var _user = req.session.user
    app.locals.user = _user
    next()
  })

  //首页
	app.get('/', Index.index)

  // 用户信息
  app.post('/user/signup', User.signup)
  app.post('/user/signin', User.signin)
  app.get('/signin', User.signinUnRequired, User.showSignin)
  app.get('/register', User.signinUnRequired, User.showSignup)
  app.get('/logout', User.logout)
  app.get('/success', User.signSuccess)
  app.get('/forgot', User.forgot)
  app.post('/forgotsend', User.forgotSend)
  app.get('/successsend', User.successSend)
  app.get('/verify', User.signVerify)
  app.get('/resetpassword/:verify', User.resetpassword)
  app.post('/savepassword', User.savepassword)
  app.get('/successpassword', User.successpassword)
  app.get('/activation/:verify', User.signActivation)
  app.get('/admin/user/list', User.signinRequired,User.adminRequired, User.list)
  
  //日程消息提醒
  app.get('/schedule', Schedule.list)
  app.delete('/schedule/delete', Schedule.del)
  app.get('/schedule/detail/:id', Schedule.detail)
  
  // 域名信息设置
  app.get('/domain/add',User.signinRequired,Domain.domainRequired, Domain.add )
  app.post('/domain/addctrl',User.signinRequired,Domain.domainRequired, Domain.addctrl )

  // 客户
  app.get('/customer', Customer.list)
  app.post('/customer/update', Customer.update)
  app.post('/customer/add', Customer.save)
  app.delete('/customer/delete', Customer.del)
  app.get('/customer/detail/:id', Customer.detail)

  //潜在客户
  app.get('/clue', Clue.list)
  app.post('/clue/update', Clue.update)
  app.post('/clue/add', Clue.save)
  app.delete('/clue/delete', Clue.del)
  app.get('/clue/detail/:id', Clue.detail)

  //项目
  app.get('/business', Business.list)
  app.post('/business/update', Business.update)
  app.post('/business/add', Business.save)
  app.delete('/business/delete', Business.del)
  app.get('/business/detail/:id', Business.detail)

  //设置-group
  app.get('/group', Group.list)
  app.post('/group/update', Group.update)
  app.post('/group/add', Group.save)
  app.delete('/group/delete', Group.del)

  //设置-tag
  app.get('/tag', Tag.list)
  app.post('/tag/update', Tag.update)
  app.post('/tag/add', Tag.save)
  app.delete('/tag/delete', Tag.del)

  //产品信息
  app.get('/product', Product.list)
  app.post('/product/update', Product.update)
  app.post('/product/add', Product.save)
  app.delete('/product/delete', Product.del)
  app.get('/product/detail/:id', Product.detail)
  app.post('/product/upload',multipartMiddleware, Product.saveImg)
  app.delete('/product/deleteimg', Product.deleteImg)
 
  //产品分类
  app.get('/cate', Cate.list)
  app.post('/cate/update', Cate.update)
  app.post('/cate/add', Cate.save)
  app.delete('/cate/delete', Cate.del)

  //报价单
  app.get('/quotation', Quotation.list)
  app.post('/quotation/update', Quotation.update)
  app.post('/quotation/add', Quotation.save)
  app.delete('/quotation/delete', Quotation.del)
  app.get('/quotation/detail/:id', Quotation.detail)

  //报价单--头部
  app.get('/quotationhead', Quotationhead.list)
  app.post('/quotationhead/update', Quotationhead.update)
  app.post('/quotationhead/add', Quotationhead.save)
  app.delete('/quotationhead/delete', Quotationhead.del)

  //报价单--尾部
  app.get('/quotationfoot', Quotationfoot.list)
  app.post('/quotationfoot/update', Quotationfoot.update)
  app.post('/quotationfoot/add', Quotationfoot.save)
  app.delete('/quotationfoot/delete', Quotationfoot.del)

  //user setting
  app.get('/setting', Setting.data)
  app.post('/setting/update', Setting.update)
  //成员操作
  app.get('/setting/list', Setting.placeAdminRequired,Setting.list)
  app.post('/setting/add', Setting.placeAdminRequired,Setting.add)
  app.delete('/setting/delete', Setting.placeAdminRequired,Setting.del)
  app.get('/setting/detail/:id', Setting.placeAdminRequired,Setting.detail)
  app.post('/setting/updatecopy', Setting.placeAdminRequired,Setting.updatecopy)
  app.get('/setting/rbac', Setting.rbac)

  /* 意见反馈 */
  app.get('/admin/feedbackl', User.signinRequired,User.adminRequired,Feedbackl.list)
  app.post('/feedbackl/add', Feedbackl.save)
  app.delete('/feedbackl/delete', User.signinRequired,User.adminRequired,Feedbackl.del)
  
}
