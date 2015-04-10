var home24 = home24 || {};

home24.square = function (options) {
	var parent, children = [];
	var defaults = {containerSize: 600, childSize: 50, numberOfChildren: 12};
	options = merge(defaults, options);
	var utility = new home24.utils().getInstance();

	function merge(obj1, obj2) {
		var obj3 = {};
		for (var attr in obj1) {
			obj3[attr] = obj1[attr];
		}
		for (var attr in obj2) {
			obj3[attr] = obj2[attr];
		}
		return obj3;
	}

	function createSquare(size) {
		var div = document.createElement('div');
		div.style.width = size + "px";
		div.style.height = size + "px";
		return div;
	}

	function createParentContainer(size) {
		var parentDiv = createSquare(size);
		parentDiv.className = "parent-container";
		return parentDiv;
	}

	function createChildContainer(size) {
		var childDiv = createSquare(size);
		childDiv.className = "child-container";
		childDiv.onmouseover = childContainerMouseOverHandler;
		childDiv.onmouseout = childContainerMouseOutHandler;
		childDiv.style.backgroundColor = utility.getRandomColor();
		return childDiv;
	}

	function childContainerMouseOverHandler () {
		var self = this;
		self.mouseHovering = true;

		window.setTimeout(function() {
			if(self.mouseHovering) {
				self.style.display = 'none';
			}
		}, 3000);
	}

	function childContainerMouseOutHandler() {
		this.mouseHovering = false;
	}

	function createHandler() {
		parent = createParentContainer(options.containerSize);

		for (var index = 0; index < options.numberOfChildren; index++) {
			var child = createChildContainer(options.childSize);
			children.push(child);
			parent.appendChild(child);
		}

		return parent;

	}

	function appendHandler(element) {
		var target = element || document.body;

		target.appendChild(parent);

	}

	return {

		create: createHandler,
		appendTo: appendHandler

	};


};

