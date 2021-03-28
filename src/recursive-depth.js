module.exports = class DepthCalculator {
  calculateDepth = function(arr) {
    if (arr instanceof Array) {
      return 1 + arr.reduce(
        function(max, item) { return Math.max(max, this.calculateDepth(item))}.bind(this),
        0
      );
    }
    else {
      return 0;
    }
  }
}