import { cold } from 'jest-marbles';
import detectKonamiSequence from './konami';

it('Should receive OK when Konami sequence is detected', () => {
  const expected = cold('(o|)', { o: 'OK' });
  const sequence = cold('(uuddlrlrab|)', {
    u: 'ArrowUp',
    d: 'ArrowDown',
    l: 'ArrowLeft',
    r: 'ArrowRight',
    a: 'A',
    b: 'B',
  });
  const detected$ = detectKonamiSequence(sequence);
  expect(detected$).toBeObservable(expected);
});

it('Should NOT receive OK when Konami sequence is NOT detected', () => {
  const expected = cold('(-|)');
  const sequence = cold('(uudlr|)', {
    u: 'ArrowUp',
    d: 'ArrowDown',
    l: 'ArrowLeft',
    r: 'ArrowRight',
  });
  const detected$ = detectKonamiSequence(sequence);
  expect(detected$).toBeObservable(expected);
});
