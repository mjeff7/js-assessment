stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let repeatCount;
    let lastChar = null;

    return Array.from(str)
      .filter((char) => {
        if (char === lastChar) {
          repeatCount += 1;
        } else {
          repeatCount = 1;
          lastChar = char;
        }

        return repeatCount <= amount;
      })
      .join('');

    // Alternatively:

    // Use regex matching. Capture a character in group 1 and that same
    // character and amount additional repetitions of that character in
    // group 2, plus any additional repetitions to be discarded.  Replace with
    // group 2, which is amount repetitions.  Replace globally for all such
    // occurances.

    // const regEx = new RegExp(`(?:(.)(\\1{${amount}}))\\1*`, 'g');
    // return str.replace(regEx, '$2');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return Array.from(str)
      .reverse()
      .join('');
  },
};
