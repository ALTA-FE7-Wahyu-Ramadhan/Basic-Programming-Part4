function joinArrayRemoveDuplicate(arrayA, arrayB) {
  // Your Code Here
  let result = [...arrayA,...arrayB];
  return result;
}

// Test cases
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
// ["apel", "anggur", "lemon", "leci", "nanas"]
 
console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
// ["samsung", "apple", "sony", "xiaomi"]
 
console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
// [“football”, “basketball”]

// module.exports = joinArrayRemoveDuplicate;
