import { prompt } from 'enquirer';
import spongify from './spongify';

/**
 * SpongeCLI, gets text input from the command line and
 * pass it to the spongify function
 * @param {string} [sentence] Sentence text input from commander
 * @param {any[]} [argv] The rest of the command line arguments
 * @returns {Promise<void>}
 */
export default async function spongeCLI(sentence?: string, ...argv: any[]): Promise<void> {
  let input = sentence as string;
  if (argv[1]) {
    const extraArgs = argv[1] as string[];
    const extras = extraArgs?.join(' ');
    input = `${input} ${extras}`;
  }

  const noInitialParameter = !input;
  if (noInitialParameter) {
    input = (await getUserInput()).promptSentence;
  }
  const isStillBlank = !input;
  if (isStillBlank) {
    // Exit early because it simply will just get stuck in a loop
    // on an infinite loop
    console.error('Cannot process blank input!');
    throw new Error('Cannot process blank input!');
  }

  let spongetext = spongify(input);
  const isSameAsSource = spongetext === sentence;
  while (isSameAsSource) {
    spongetext = spongify(input);
  }

  console.log(spongetext);
}

/**
 * @interface IPromptObject The return object from enquirer prompt
 */
interface IPromptObject {
  promptSentence: string;
}

/**
 * Get user input from command line
 * @returns {Promise<IPromptObject>}
 */
async function getUserInput(): Promise<IPromptObject> {
  try {
    const response = await prompt<IPromptObject>({
      type: 'input',
      name: 'promptSentence',
      message: 'Type in a sentence to spongify:',
    });
    return response;
  } catch (error) {
    console.error(error);
    return { promptSentence: '' };
  }
}
