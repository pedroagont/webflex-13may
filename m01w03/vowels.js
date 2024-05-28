function numberOfVowels(str) {
  if (!str) return null;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const chars = str.split('');

  let count = 0;

  for (const char of chars) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

module.exports = numberOfVowels;
