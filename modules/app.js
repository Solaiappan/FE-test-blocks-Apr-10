(function() {

	var onLoadCallback = function (containerSize, childSize, numberOfChildren) {
		var square = new home24.square({
			containerSize: containerSize,
			childSize: childSize,
			numberOfChildren: numberOfChildren
		});
		square.create();
		square.appendTo(document.body);


	};

	window.onload = function () {
		onLoadCallback(1000, 150, 50);
	}
}());