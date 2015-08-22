
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client',
  onBeforeAction:function(){
    this.redirect('/login');

  }
});
Router.route('/login',{
  name:'login',
  where:'client'
});
Router.route('/register',{
  name:'register',
  where:'client'
})
Router.route('/check',{
  name:'check',
  where:'client'
})
Router.route('/scanbarcode',{
  name:'ScanBarcode',
  where:'client'
})
Router.route('/drivertracking',{
  name:'DriverTracking',
  where:'client',
})