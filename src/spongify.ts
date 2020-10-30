/**
 * Spongify a sentence
 * @param {string} sentence the input sentence
 * @returns {string} spongified sentence
 */
function spongify(sentence: string): string {
  return sentence
    .trim()
    .toLowerCase()
    .split('')
    .reduce((outputText, character): string => {
      const randomBoolean = getRandomBoolean();
      const spongeCharacter = randomBoolean
        ? character.toUpperCase()
        : character;

      return `${outputText}${spongeCharacter}`;
    }, '');
}

/**
 * Get a random boolean, used to determine
 * if character should be uppercase or not.
 * @returns {boolean}
 */
function getRandomBoolean(): boolean {
  const randomBinaryNumber = Math.floor(Math.random() * Math.floor(2));
  return Boolean(randomBinaryNumber);
}

export default spongify;
