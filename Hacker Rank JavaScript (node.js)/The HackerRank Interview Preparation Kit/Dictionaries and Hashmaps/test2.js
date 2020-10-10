const array = [1, 2, 3, 4];
const callback = function(element) {
    console.log(element);
    
    if (element === 2) 
      i=array.length;
      return; // would this make a difference? no.
}
for (var i = 0; i < array.length; i++) {
    callback(array[i]);
}
// Output: 1 2 3 4