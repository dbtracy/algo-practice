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
        queue.push([word.slice(i), collected.concat([wordSegment])])
      }
      console.log('WORD:', word)
      console.log('COLLECTED:', collected)
    }
    console.log('QUEUE AFTER:', queue)
    console.log('*******')
  }
  return answers
}

console.log(wordsInString(['dog', 'cats', 'sand', 'cat', 'and', 'catsan', 'ddog'], "catsanddog"))

/**
 * APPROACH:
 *
 * 1. Create 'result' variable (array)
 * 2. Create 'wordListHash' variable (object)
 * 3. Loop through wordList, adding words to wordListHash
 * 4. Loop through string
 *   - once a full word in hash is found,
 *
 */
