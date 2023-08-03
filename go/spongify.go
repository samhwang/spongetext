package main

import (
	"math/rand"
	"strings"
	"time"
)

// spongify a sentence
func spongify(input string) string {
	input = strings.TrimSpace(input)
	input = strings.ToLower(input)
	output := ""
	for _, character := range input {
		stringCharacter := string(character)
		randomBool := getRandomBoolean()
		if randomBool {
			output += strings.ToUpper(stringCharacter)
		} else {
			output += stringCharacter
		}
	}

	return output
}

// get a random boolean, used to determine
// if a character should be uppercase or not.
func getRandomBoolean() bool {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	randomNumber := r.Intn(2)
	return randomNumber != 0
}
