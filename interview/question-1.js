/**
 *
 * @param {string} input
 */
function longestPalindrome(input) {
  let length = input.length;
  if (length === 0) return 0;
  while (length > 1) {
    for (let index = 0; index <= input.length - length; index++) {
      const substring = input.substring(index, length + index);
      if (isPalindrome(substring)) return substring.length;
    }
    length--;
  }
  return 1;
}

/**
 *
 * @param {string} input
 */
function isPalindrome(input) {
  for (let index = 0; index < input.length / 2; index++) {
    if (input.charAt(index) !== input.charAt(input.length - 1 - index)) {
      return false;
    }
  }
  return true;
}

console.log(
  longestPalindrome(''),
  longestPalindrome('qwertyuiop'), // 1
  longestPalindrome('abafdqwertrewq'), // 9
  longestPalindrome('grgdeedtrewwert') // 8
);
