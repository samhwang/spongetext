# SpONGEteXt-gO

## Run the script

```shell
go run .
```

## Build

```shell
go build .
./spongetext-go
```

## Examples

The input can either be a single word...

```shell
$ ./spongetext-go
TYpesCripT
```

...or multiple words in quotation marks...

```shell
$ ./spongetext-go "hello world"
heLlo WORld
```

...or multiple words WITHOUT quotation marks

```shell
$ ./spongetext-go My name is Sam
My NaME Is SAm
```

Look ma, no params!

```shell
$ ./spongetext-go
Type in a sentence to spongify: Look ma, no params!
LOOK mA, no paraMS!
```

Using it with the famous `fortune` program.

```shell
$ ./spongetext-go `fortune`
DOn'T HaTE YOURSELF in the moRNiNg sLeeP TilL NoON.
```

... or if you're a command line nerd

```shell
$ fortune | ./spongetext-go
Type in a sentence to spongify: A visit to a strange place will bring fresh work.
A visIt TO A sTRaNGe PLacE wilL BrInG fResH Work.
```
