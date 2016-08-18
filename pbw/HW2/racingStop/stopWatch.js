'use strict';

function StopWatch() {
	this.startTime = 0;
	this.endTime = 0;
	this.isStop = false;
}


//define methods and chain them to stopwatch prototype
StopWatch.prototype.start = function() {
	this.startTime = Date.now();
	this.isStop = false;
	return this;
};

StopWatch.prototype.stop = function() {
	if (this.isStop === false) {
		this.endTime = Date.now();
		this.isStop = true;
	}
	return this;
};

StopWatch.prototype.log = function() {
	var res;
	if (this.startTime === 0) {
		return 0;
	} else {
		if (this.isStop === false) {
			this.endTime = Date.now();
		}
		res = this.endTime - this.startTime;
	}
	return res;
};

StopWatch.prototype.reset = function() {
	this.startTime = 0;
	this.endTime = 0;
	this.isStop = false;
	return this;
};

function Racer() {
	Racer.all.push(this);
}

//one of the ways to inherit all methods from stopwatch
Racer.prototype = new StopWatch();
Racer.prototype.constructor = Racer;

Racer.all = [];

Racer.all.start = function() {
	var time = Date.now();
	for (var i = 0; i < this.length; i++) {
		this[i] = time;
	}
};


