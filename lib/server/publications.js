Meteor.publish("Cart-userOrders", function () {
	check(arguments, [Match.Any]);
	if(this.userId){
		return [
			Cart.Items.find({userId:this.userId})
		];
	}
	this.ready();
});

Meteor.publish("Cart-deviceOrders", function(deviceId){
	check(arguments, [Match.Any]);
	if(deviceId){
		return [
			Cart.Items.find({deviceId:deviceId})
		];
	}
	this.ready();
});