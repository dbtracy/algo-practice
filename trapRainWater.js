// function trapRainWater(heights) {
//   let totalAmount = 0
//   if (heights === null || heights.length === 0) {
//     return totalAmount
//   }

//   let leftHighest = new Array(heights.length + 1)
//   leftHighest[0] = 0

//   for (let i = 0; i < heights.length; i++) {
//     leftHighest[i + 1] = Math.max(leftHighest[i], heights[i])
//   }

//   let rightHighest = 0
//   let smallerHighest
//   for (let i = heights.length - 1; i >= 0; i--) {
//     rightHighest = Math.max(heights[i], rightHighest)
//     smallerHighest = Math.min(leftHighest[i], rightHighest)
//     if (smallerHighest > heights[i]) {
//       totalAmount += smallerHighest - heights[i]
//     }
//   }
//   return totalAmount
// }
/**
 * totalAmount = 6
 * heights =        [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
 * leftHighest = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]
 * rightHighest = 3
 */

/**
 * APPROACH
 *
 * 1. Make a 'total' variable
 * 2. Edge cases: if !arr or arr.length is zero, return total
 * 3. Make new array, leftHighest, length being one more than arr
 * 4. Set first el to 0 (representing end of array being no value)
 * 5. Loop through arr
 *   - set leftHighest[i+1] to the greater of leftHighest[i] and arr[i]
 * 6. Make a 'rightHighest' variable set to 0 (no need for full array)
 * 7. Make a 'smallerHighest' variable set to nothing (yet)
 * 8. Loop backwards through arr
 *   - set rightHighest to greater of rightHighest and arr[i]
 *   - smallerHighest = lesser of leftHighest[i] and rightHighest
 *   - if smallerHighest is greater than arr[i], add difference to total
 * 9. Return total
 */

function trapRainWater(arr) {
  let total = 0

  if (!arr || arr.length === 0) return total

  let leftHighest = new Array(arr.length + 1)
  leftHighest[0] = 0

  for (let i = 0; i < arr.length; i++) {
    leftHighest[i + 1] = Math.max(leftHighest[i], arr[i])
  }

  let rightHighest = 0, smallerHighest
  for (let i = arr.length - 1; i >= 0; i--) {
    rightHighest = Math.max(rightHighest, arr[i])
    smallerHighest = Math.min(rightHighest, leftHighest[i])
    if (smallerHighest > arr[i]) {
      total += smallerHighest - arr[i]
    }
  }

  return total
}

console.log(trapRainWater([0, 7, 0, 2, 1, 0, 1, 3, 2, 1, 7, 1]))
