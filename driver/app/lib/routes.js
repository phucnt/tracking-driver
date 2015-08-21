
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});
Router.route('/login',{
  name:'login',
  where:'client'
});
Router.route('/register',{
  name:'register',
  where:'client'
})