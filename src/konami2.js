import isEqual from './helpers';

const konamiSequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'a',
  'b',
];
const buffer = [];

function isKonami(seq1, seq2 = konamiSequence) {
  if (seq1.length < 10) {
    return false;
  }
  return isEqual(seq1, seq2);
}

function createBuffer(key, size = 10) {
  buffer.push(key);
  if (buffer.length > size) {
    buffer.shift();
  }
}

export default function detectKonamiSequence(key) {
  createBuffer(key);
  if (isKonami(buffer)) {
    return 'OK';
  }

  return 'NOT_OK';
}
