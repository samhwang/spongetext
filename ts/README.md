# SpoNgetExT-typEsCriPT

## Prerequisites

- Node 12
- NPM 6
- Yarn 1

## Install and Build

```shell
yarn install
yarn build
```

## Run the script

Run one of these commands, they should evaluate to the same output.

```shell
yarn sponge
npm run sponge
node .
node build/index.js
```

```shell
Usage:  spongetext [options] [sentence]

Create sponge-text from a sentence and output to console

Options:
  -v, --version  output current version
  -h, --help     display help for command
```

## Examples

The input can either be a single word...

```shell
$ node build/index.js TypeScript
TYpesCripT
```

...or multiple words in quotation marks...

```shell
$ node build/index.js "hello world"
heLlo WORld
```

...or multiple words WITHOUT quotation marks

```shell
$ node build/index.js My name is Sam
My NaME Is SAm
```

Look ma, no params!

```shell
$ node build/index.js
✔ Type in a sentence to spongify: ‣ Look ma, no params!
LOOK mA, no paraMS!
```

Using it with the famous `fortune` program.

```shell
$ node build/index.js `fortune`
DOn'T HaTE YOURSELF in the moRNiNg sLeeP TilL NoON.
```

... or if you're a command line nerd

```shell
$ fortune | node build/index.js
✔ Type in a sentence to spongify: ‣ A visit to a strange place will bring fresh work.
A visIt TO A sTRaNGe PLacE wilL BrInG fResH Work.
```
