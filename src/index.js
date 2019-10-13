const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

const DECODE_NUMBERS = {
  '10': '.',
  '11': '-'
};

function decode(expr) {
  return expr
    .split('**********') // split by encoded words
    .map(a =>
      a
        .match(/.{1,10}/g) // split by 10 signs numbers
        .map(b => b.replace(/^0+/, '')) // remove first zeros
        .map(c => c.match(/.{1,2}/g)) // split by two numbers
        // encode numbers to '.' and '-'
        .map(d => d.map(f => (f = DECODE_NUMBERS[f])).join(''))
        .map(h => MORSE_TABLE[h]) // decode to string with letters
        .join('')
    )
    .join(' '); // join all
}

module.exports = {
  decode
};
