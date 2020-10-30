import spongify from './spongify';

/**
 * SpongeCLI, gets text input from the command line and
 * pass it to the spongify function
 * @param {string} [sentence] Sentence text input from commander
 * @param {any[]} [argv] The rest of the command line arguments
 * @returns {void}
 */
function spongeCLI(sentence?: string, ...argv: any[]): void {
  const notEnoughParameters = !sentence;
  if (notEnoughParameters) {
    console.error('ERROR: There must be a text input');
    console.warn('For more information, use --help tag');
    throw new Error('Not enough arguments');
  }

  let input = sentence as string;

  if (argv[1]) {
    const extraArgs = argv[1] as string[];
    const extras = extraArgs?.join(' ');
    input = `${input} ${extras}`;
  }

  let spongetext = spongify(input);
  const isSameAsSource = spongetext === sentence;
  while (isSameAsSource) {
    spongetext = spongify(input);
  }

  console.log(spongetext);
}

export default spongeCLI;
