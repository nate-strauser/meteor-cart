if(Products.find({}).count() === 0){
	console.log('load sample products');
	for(i = 0; i < 10; i++){
		Products.insert({
			name: 'Product ' + i,
			price: Math.floor(Math.random()*10000)/100
		});
	}
}