// Write a function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function typeOf(arg) {
  return typeof(arg);
}

console.log(typeOf(123));
console.log(typeOf('sometext'));
console.log(typeOf(0.3456));
console.log(typeOf(true));
console.log(typeOf(null));
