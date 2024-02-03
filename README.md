# yosay

> Tell Yeoman what to say

## Install

```sh
npm install c-yosay
```

## Usage

```js
import yosay from 'c-yosay';

console.log(yosay('Welcome to Coherent, ladies and gentlemen!'));

/*

     _-----_
    |       |    ╭──────────────────────────╮
    |--(c)--|    │    Welcome to Coherent,  │
   `----o----´   │   ladies and gentlemen!  │
    ( _´h`_ )    ╰──────────────────────────╯
    /___e___\   /
     |  r  |
   __'._e_.'__
 ´   `  nt ´ | `
*/
```

*You can style your text with [`chalk`](https://github.com/chalk/chalk) before passing it to `yosay`.*

## CLI

```sh
npm install --global c-yosay
```

```
$ yosay --help

  Usage
    $ yosay <string>
    $ yosay <string> --maxLength 8
    $ echo <string> | yosay

  Example
    $ yosay 'Welcome to Coherent, ladies and gentlemen!'

     _-----_
    |       |    ╭──────────────────────────╮
    |--(c)--|    │    Welcome to Coherent,  │
   `----o----´   │   ladies and gentlemen!  │
    ( _´h`_ )    ╰──────────────────────────╯
    /___e___\   /
     |  r  |
   __'._e_.'__
 ´   `  nt ´ | `

```
