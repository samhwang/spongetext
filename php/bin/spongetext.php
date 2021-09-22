#!/usr/bin/env php

<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Symfony\Component\Console\Application;
use Spongetext\CLI;

$spongeCLI = new CLI();

$app = new Application();
$app->add($spongeCLI);
$app->setDefaultCommand($spongeCLI->getName(), true);
$app->run();
