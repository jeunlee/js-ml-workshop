
//Start off with what passes the first test.
function KNN(kSize){
	this.kSize = kSize;
	this.points = [];
}

KNN.prototype.train = function(pts){
  if (!this.points.length) this.points = pts
  else
}

module.exports = KNN
