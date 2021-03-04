
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let minValue = array[0];
  for (let i = 1; i < array.length; i++){
      if (array[i] < minValue) {
        minValue = array[i];
      } else continue;
  }
  return minValue;
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    } else continue;
  }
  return maxValue;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  let avgValue = sum / array.length;
  return avgValue;
}