//basic:
console.log(require('./')()('tell me something about yourself: '))

// ANSI escape codes colored text test
require('./')()('\u001B[31mcolored text: \u001B[39m');

let prompt = require('./')({
  history: require('prompt-sync-history')(),
  autocomplete: complete(['hello1234', 'he', 'hello', 'hello12', 'hello123456']),
  sigint: false
});

let value = 'frank';
let name = prompt('enter name: ', value);
console.log('enter echo * password');
let pw = prompt({echo: '*'});
let pwb = prompt('enter hidden password (or don\'t): ', {echo: '', value: '*pwb default*'})
let pwc = prompt.hide('enter another hidden password: ')
let autocompleteTest = prompt('custom autocomplete: ', {
  autocomplete: complete(['bye1234', 'by', 'bye12', 'bye123456'])
});

prompt.history.save();

console.log('\nName: %s\nPassword *: %s\nHidden password: %s\nAnother Hidden password: %s', name, pw, pwb, pwc);
console.log('autocomplete2: ', autocompleteTest);

function complete(commands) {
  return function (str) {
    let i;
    let ret = [];
    for (i=0; i< commands.length; i++) {
      if (commands[i].indexOf(str) == 0)
        ret.push(commands[i]);
    }
    return ret;
  };
};
