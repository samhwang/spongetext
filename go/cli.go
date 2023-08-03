package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/urfave/cli/v2"
)

// SpongeCLI, gets text input from the command line and
// pass it to the spongify function
func spongeCLI(c *cli.Context) error {
	args := c.Args()

	input := ""
	noInitialParameters := !args.Present()
	if noInitialParameters {
		input = getUserInput()
	} else {
		firstParam := args.First()
		tailParams := args.Tail()
		input = firstParam
		if len(tailParams) > 0 {
			input += " " + strings.Join(tailParams, " ")
		}
	}

	isStillBlank := input == ""
	if isStillBlank {
		log.Fatal("Cannot process blank input!")
	}

	spongetext := spongify(input)
	sameAsSource := spongetext == input
	for sameAsSource {
		spongetext = spongify(input)
	}
	fmt.Printf("\n%s\n", spongetext)
	return nil
}

// Get user input from command line
func getUserInput() string {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Type in a sentence to spongify: ")
	input, _ := reader.ReadString('\n')
	input = strings.Replace(input, "\n", "", -1)
	return input
}
