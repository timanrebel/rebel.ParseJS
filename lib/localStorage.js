(function() {
	"use strict";

	var db;

	function LocalStorage() {}
	db = LocalStorage;

	db.prototype.getItem = function(key) {
		return Ti.App.Properties.getString(key);
	};

	db.prototype.setItem = function(key, val) {
		return Ti.App.Properties.setString(key, val);
	};

	db.prototype.removeItem = function(key) {
		return Ti.App.Properties.removeProperty(key);
	};

	db.prototype.clear = function() {
		var keys = Ti.App.Properties.listProperties();

		for (var i = 0, ln = keys.length; i < ln; i++) {
			Ti.App.Properties.removeProperty(keys[i]);
		}
	};

	db.prototype.key = function(i) {
		i = i || 0;
		return Ti.App.Properties.listProperties()[i];
	};

	db.prototype.__defineGetter__('length', function() {
		return Ti.App.Properties.listProperties().length;
	});

	module.exports = new LocalStorage();
}());
