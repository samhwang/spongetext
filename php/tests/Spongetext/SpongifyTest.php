<?php

namespace Spongetext;

use PHPUnit\Framework\TestCase;
use Faker\Factory as Faker;

class SpongifyTest extends TestCase
{
    protected function getInputAndOutput(): array
    {
        $faker = Faker::create('en_AU');
        $sponge = new Spongify();
    
        $input = $faker->sentence(10);
        $output = $sponge->spongify($input);

        return [$input, $output];
    }

    public function testSpongeNotNull(): void
    {
        [$_input, $output] = $this->getInputAndOutput();
        $this->assertNotNull($output);
    }

    public function testSpongeReturnsString(): void
    {
        [$_input, $output] = $this->getInputAndOutput();
        $this->assertIsString($output);
    }

    public function testSpongeSameLengthAsinput(): void
    {
        [$input, $output] = $this->getInputAndOutput();
        $this->assertEquals(strlen($input), strlen($output));
    }
}