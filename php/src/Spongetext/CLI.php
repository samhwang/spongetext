<?php

namespace Spongetext;

use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;

class CLI extends Command
{
    protected static $defaultName = 'sponge';

    public function __construct()
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $descriptionText = 'Create sponge-text from a sentence and output to console';
        $this
            ->setDescription($descriptionText)
            ->setHelp($descriptionText)
            ->addArgument('sentence', InputArgument::IS_ARRAY, 'sentence to spongify');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $sentence = implode(" ", $input->getArgument('sentence'));
        $noInitialInput = !$sentence;
        if ($noInitialInput) {
            $sentence = $this->getUserInput($input, $output);
        }

        $isStillBlank = !$sentence;
        if ($isStillBlank) {
            throw new Exception("Cannot process blank input!");
        }

        $sponge = new Spongify();
        $spongetext = $sponge->spongify($sentence);
        while (strcmp($sentence, $spongetext) === 0) {
            $spongetext = $sponge->spongify($sentence);
        }
        
        $output->writeln($spongetext);

        return Command::SUCCESS;
    }

    protected function getUserInput(InputInterface $input, OutputInterface $output): string|null
    {
        $helper = $this->getHelper('question');
        $question = new Question('Type in a sentence to spongify: ');
        $sentence = $helper->ask($input, $output, $question);
        return $sentence;
    }
}
