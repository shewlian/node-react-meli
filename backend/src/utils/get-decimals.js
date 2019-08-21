module.exports = function(value) {
  return Number((value % 1).toFixed(2).substring(2))
}
