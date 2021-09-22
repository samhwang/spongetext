import { program } from 'commander';
import spongeCLI from './cli';

program
  .command('spongetext [sentence]')
  .description('Create sponge-text from a sentence and output to console')
  .action(spongeCLI)
  .version('1.0.0', '-v, --version', 'output current version')
  .parse(process.argv);
