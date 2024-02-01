# yosay

> Tell Yeoman what to say

Like [cowsay](https://en.wikipedia.org/wiki/Cowsay), but less cow.

![](screenshot.png)

## Install

```sh
npm install c-yosay
```

## Usage

```js
import yosay from 'yosay';

console.log(yosay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));

/*
     _-----_     ╭──────────────────────────╮
    |       |    │  Welcome to the polished │
    |--(c)--|    │ something iloveunicornsi │
   `----o----´   │ loveunicornsiloveunicorn │
    ( _´h`_ )    │ siloveunicornsiloveunico │
    /___e___\   /│     rnsiloveunicorns     │
     |  r  |     │        generator!        │
   __'._e_.'__   ╰──────────────────────────╯
 ´   `  nt ´ | `
*/
```

*You can style your text with [`chalk`](https://github.com/chalk/chalk) before passing it to `yosay`.*

## CLI

```sh
npm install --global yosay
```

```
$ yosay --help

  Usage
    $ yosay <string>
    $ yosay <string> --maxLength 8
    $ echo <string> | yosay

  Example
    $ yosay 'Sindre is a horse'

     _-----_     ╭──────────────────────────╮
    |       |    │  Welcome to the polished │
    |--(c)--|    │ something iloveunicornsi │
   `----o----´   │ loveunicornsiloveunicorn │
    ( _´h`_ )    │ siloveunicornsiloveunico │
    /___e___\   /│     rnsiloveunicorns     │
     |  r  |     │        generator!        │
   __'._e_.'__   ╰──────────────────────────╯
 ´   `  nt ´ | `
```
