/**
 * Given an input list of words and a string, output every  different set of words that you can find in the string from the given words. For example, input:
 *
 * wordList = ['dog', 'cats', 'sand', 'cat', 'and'],
 * word = "catsanddog"
 * output: [ ['cat', 'sand', 'dog'], ['cats', 'and', 'dog'] ]
 */

function wordsInString(wordList, word) {
  let queue = [[word, []]]
  let answers = []

  while (queue.length) {
    let [word, collected] = queue.pop()
    if (wordList.includes(word)) {
      collected.push(word)
      answers.push(collected)
    }
    console.log('QUEUE:', queue)
    for (let i = 1; i < word.length; i++) {
      let wordSegment = word.slice(0, i)
      if (wordList.includes(wordSegment)) {
        queue.push([word.slice(i), [...collected, wordSegment]])
      }
      console.log('QUEUE IN LOOP:', queue)
      console.log('WORD:', word)
      console.log('COLLECTED:', collected)
    }
    console.log('QUEUE AFTER:', queue)
    console.log('*******')
  }
  return answers
}

console.log(wordsInString(['dog', 'cats', 'sand', 'cat', 'and'], "catsanddog"))

/**
 * APPROACH:
 *
 * 1. Create a 'queue'
 *  - each element in the 'queue' is a 2-el array
 *    - arr[0] is rest of string to work with, arr[1] is array of known word(s)
 * 2. Create 'answers' array
 * 3. While 'queue' has stuff in it
 *  - pop the 'queue' and set 'word' to pop[0], 'collected' (array) to pop[1]
 *  - if word is in wordlist, push it into 'collected'
 *  - push collected into answers
 *  - loop through 'word', starting at i = 1
 *    - if word.slice(i) is in wordlist, push [restofstring, [...collected, wordslice]] into 'queue'
 * 4. Return answers
 */
