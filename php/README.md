# SpONGEteXt-phP

## Prerequisites

- PHP 8.0
- Composer 2.0

## Install dependencies

```shell
composer install
```

## Run the script

```shell
./spongetext.phar
```

## Build

```shell
composer run build
```

## Examples

The input can either be a single word...

```shell
$ ./spongetext.phar
TYpesCripT
```

...or multiple words in quotation marks...

```shell
$ ./spongetext.phar "hello world"
heLlo WORld
```

...or multiple words WITHOUT quotation marks

```shell
$ ./spongetext.phar My name is Sam
My NaME Is SAm
```

Look ma, no params!

```shell
$ ./spongetext.phar
Type in a sentence to spongify: Look ma, no params!
LOOK mA, no paraMS!
```

Using it with the famous `fortune` program.

```shell
$ ./spongetext.phar `fortune`
DOn'T HaTE YOURSELF in the moRNiNg sLeeP TilL NoON.
```

... or if you're a command line nerd

```shell
$ fortune | ./spongetext.phar
Type in a sentence to spongify: ‣ A visit to a strange place will bring fresh work.
A visIt TO A sTRaNGe PLacE wilL BrInG fResH Work.
```
