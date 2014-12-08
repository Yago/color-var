# Name That Color

A command line utility that uses the library that the name that color project (http://chir.ag/projects/ntc/) and turn it to nice variable.

# Install

```
npm install -g color-var
```

# Usage

You use the command line utility `color-var` and pass in any color that can be processed by [One Color](https://github.com/One-com/one-color).

```
$ color-var "#a9d91d"
or
$ color-var "a9d91d"
or
$ color-var a9d91d
or
$ color-var "#eee"
or
$ color-var "rgb(124, 96, 200)"
or
$ color-var "rgb(99%, 40%, 0%)"
or
$ color-var "hsl(120, 75%, 75%)"
or
$ color-var "hsv(220, 47%, 12%)"
or
```

Note that the [Name That Color](http://chir.ag/projects/ntc/) library does not factor in alpha channel.

# Libraries Used

- [One Color](https://github.com/One-com/one-color): Used to be able to convert many color formats to hex to be able to be used with the [Name That Color](http://chir.ag/projects/ntc/) library
- [Name That Color](http://chir.ag/projects/ntc/): Used in order to convert hex colors to names

# License

This library is released under MIT.  The [Name That Color](http://chir.ag/projects/ntc/) library is released under the [Creative Commons Attribution 2.5 Generic](http://creativecommons.org/licenses/by/2.5/).
