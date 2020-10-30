import spongify from './spongify';

/**
 * SpongeCLI, gets text input from the command line and
 * pass it to the spongify function
 * @param {string} [sentence] Sentence text input from commander
 * @returns {void}
 */
function spongeCLI(sentence?: string): void {
  const notEnoughParameters = !sentence;
  if (notEnoughParameters) {
    console.error('ERROR: There must be a text input');
    console.warn('For more information, use --help tag');
    throw new Error('Not enough arguments');
  }

  const spongetext = spongify(sentence as string);

  console.log(spongetext);
}

export default spongeCLI;