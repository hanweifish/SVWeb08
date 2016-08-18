// 1.  Design and Code a StopWatch
//     Sample Use Case:

//     var sw = new StopWatch();
//     sw.start().stop().start().log();
//       => 0

//     <= wait 123 milliseconds
//     sw.log();
//       => 123;

//     <= wait 100 milliseconds
//     sw.stop().log();
//       => 223

//     <= wait 1000 milliseconds
//     sw.log();
//       => 223

//     sw.reset().log();
//       => 0

function stopWatch(){
  var startTime = 0;
  var stopTime = 0;
  var running = false;
  
  this.racerName = name;
  
  // return timestamp at a given time point
  function getTime(){
    var day = new Date();
    return day.getTime();
  }
  
  this.start = function(){
    if(running === true){
      return;
    }
    else if(startTime !== 0){
      stopTime = 0;
    }
    running = true;
    startTime = getTime();
  };
  
  this.stop = function(){
    if(running === false){
      return;
    }
    stopTime = getTime();
    running = false;
  };

  this.reset = function(){
    startTime = 0;
  };

  // Get the time log
  this.log = function(){
    if(startTime === 0 || stopTime === 0){
      return "Not started yet";
    }
    else {
      return(stopTime - startTime)/1000;
    }
  };
  
}


var sw = new stopWatch();
//start stopwatch
sw.start();

// start a loop to log some time
for(var i =1; i < 100; i ++){
  console.log(i);
}

// stop stopwatch
sw.stop();

// Log the time
console.log("Time to print 100 consecutive numbers are " + sw.log() + " sec");



// part 2 
// 2.  Design and Code a Racer using the StopWatch you just made
//     Sample Use Case:

//     var sumeet = new Racer();
//     var travis = new Racer();
//     var harshit = new Racer();

//     console.log(Racer.all[0] === sumeet);
//       => true
//     console.log(Racer.all[1] === travis);
//       => true
//     console.log(Racer.all[2] === harshit);
//       => true

//     Racer.all.start();
//     sumeet.stop().log();
//       =>0

//     <= wait 1000 milliseconds
//     harshit.stop().log();
//       => 1000

//     <= wait 1000 milliseconds
//     travis.stop().log();
//       => 2000

//     console.log(Racer.getWinner() === sumeet);
//       => true

function Racer(name) {
  this.name = name;
  this.stopWatch = new stopWatch();
  
  Racer.all.push(this);
}

Racer.all = [];

Racer.all.start = function() {
  for (var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].start();
  }
};

Racer.all.stop = function() {
  for (var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].stop();
  }
};

Racer.getWinners = function() {
  var found = Racer.all[0];
  
  for (var i = 0; i < Racer.all.length; i++) {
    if (Racer.all[i].log() < found.log())
      found = racer;
  }
  
  return found;  
};

Racer.prototype.start = function(){
  this.stopWatch.start();
  return this;
};

Racer.prototype.stop = function() {
  this.stopWatch.stop();
  return this;
};

Racer.prototype.log = function() {
  return this.stopWatch.log();
};

travis = new Racer("Travis");
sumit = new Racer("Sumit");
harshit = new Racer("Harshit");

Racer.all.start();

for (var i = 0; i < 10000; i++)
  console.log(i);

Racer.all.stop();

console.log(travis.log());
console.log(sumit.log());
console.log(harshit.log());
console.log(Racer.getWinners());