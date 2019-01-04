import { bufferCount, filter, map } from 'rxjs/operators';
import _ from 'lodash';

export const konamiSequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'A',
  'B',
];

export default function detectKonamiSequence(sequenceStream$) {
  return sequenceStream$.pipe(
    map(event => event.key),
    bufferCount(6, 1),
    filter(values => _.isEqual(values, konamiSequence)),
    map(() => 'OK'),
  );
}
