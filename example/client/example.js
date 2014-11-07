Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('products', {
    data: function () { 
    	return {
    		products:Products.find({})
    	};
    }
  });
});