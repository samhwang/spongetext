<?php

namespace Spongetext;

class Spongify
{
    public function spongify(string $sentence): string
    {
        $sentence = trim($sentence);
        $sentence = strtolower($sentence);
        $characters = str_split($sentence, 1);
        $output = array_reduce($characters, "self::spongifyCallback", '');

        return $output;
    }

    protected function spongifyCallback(string $outputText, string $character): string
    {
        $randomBoolean = $this->getRandomBoolean();
        $spongeCharacter = $randomBoolean ? strtoupper($character) : $character;

        return $outputText . $spongeCharacter;
    }

    protected function getRandomBoolean(): bool
    {
        return (bool)random_int(0, 1);
    }
}
