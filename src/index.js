
exports.min = function min (array) {
  if(!array) return 0; 
  if(array.length === 0) return 0;
  let minimum = null;
  array.forEach(element => {
    if(minimum > element || !minimum) minimum = element;
  });
  return minimum;
}

exports.max = function max (array) {
  if(!array) return 0; 
  if(array.length === 0) return 0;
  let maxi = null;
  array.forEach(element => {
    if(maxi < element || !maxi) maxi = element;
  });
  return maxi;
}

exports.avg = function avg (array) {
  if(!array) return 0; 
  if(array.length === 0) return 0;
  return array.reduce((a, b) => a + b) / array.length;
}
