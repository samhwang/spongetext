package main

import (
	"testing"

	"github.com/bxcodec/faker/v3"
)

func getSpongetext() (input string, output string) {
	input = faker.Sentence()
	output = spongify(input)
	return input, output
}

func TestNotUndefined(t *testing.T) {
	_, output := getSpongetext()
	isNotBlank := output != ""
	if isNotBlank == false {
		t.Error("spongetext() got blank, expected string")
	}
}

func TestShouldHaveSameLength(t *testing.T) {
	input, output := getSpongetext()
	isSameLength := len(output) == len(input)
	if isSameLength == false {
		t.Error("result does not have the same length as input")
	}
}
