var home24 = home24 || {};

home24.utils = function () {
	var instance;

	function createInstance() {
		return {getRandomColor: getRandomColor};
	}

	var getRandomColor = function () {
		function randomRGBInHex() {
			var hexValue = Math.floor(Math.random() * 256).toString(16);
			if (hexValue.length == 1) {
				hexValue += '0';
			}
			return hexValue;
		}

		return "#" + randomRGBInHex() + randomRGBInHex() + randomRGBInHex();
	};

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
};