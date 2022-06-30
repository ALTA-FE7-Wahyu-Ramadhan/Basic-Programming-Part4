function joinArrayRemoveDuplicate(arrayA, arrayB) {
  // Your Code Here
  let gabung = [...arrayA,...arrayB]; //buat gabungin
  // let result = gabung[]; //buat hilangin persamaan
  let result = [...new Set(gabung)]; //buat hilangin persamaan
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
