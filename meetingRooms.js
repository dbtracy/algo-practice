function meetingRooms(arr) {

  let max = 0
  let startTimes = []
  let endTimes = []

  for (meeting of arr) {
    startTimes.push(meeting[0])
    endTimes.push(meeting[1])
  }

  startTimes.sort((a, b) => a - b)
  endTimes.sort((a, b) => a - b)

  let i = j = 0
  let count = 0

  while (i < startTimes.length) {
    if (startTimes[i] < endTimes[j]) {
      count++
      i++
    } else {
      count--
      j++
    }
    max = Math.max(count, max)
  }

  return max
}

console.log(meetingRooms([[0, 30], [5, 10], [15, 20]]))
console.log(meetingRooms([[7, 10], [2, 4]]))
