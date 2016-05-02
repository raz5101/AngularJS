(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = cars;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected=function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('GalleryController', function(){
		this.currentImage = 0;

		this.setCurrent = function(newImage){
			this.currentImage = newImage;
		};
	});

	app.controller('ReviewController', function(){
		this.review={};

		this.addReview=function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});

	var cars = [
		{
			name: 'Lamborghini',
			price: 250000,
			description: 'Black and fast!',
			quantity: 1,
			canPurchase: true,
			images: [
				"images/lamborghini-01.jpe",
				"images/lamborghini-02.jpe",
				"images/lamborghini-03.jpe"
				],
			reviews: [
				{
					stars: 5,
					body: 'I love this product!',
					author: 'joe.blow@hotmail.com'				
				},
				{
					stars: 4,
					body: "I'd recommend to a friend.",
					author: "jimbob@cooter.com"
				}
			]
		},
		{
			name: 'Ferrari',
			price: 200000,
			description: 'Fire Engine Red!!',
			quantity: 1,
			canPurchase: true,
			images: [
				"images/ferrari-01.jpe",
				"images/ferrari-02.jpe",
				"images/ferrari-03.jpe",
				],
			reviews: []
		}

	];


})();
