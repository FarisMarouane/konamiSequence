import detectKonamiSequence from './konami2';

it('Should receive OK when Konami sequence is detected', () => {
  const expected = 'OK';
  detectKonamiSequence('keyDown');
  detectKonamiSequence('keyDown');
  detectKonamiSequence('ArrowUp');
  detectKonamiSequence('ArrowUp');
  detectKonamiSequence('ArrowDown');
  detectKonamiSequence('ArrowDown');
  detectKonamiSequence('ArrowLeft');
  detectKonamiSequence('ArrowRight');
  detectKonamiSequence('ArrowLeft');
  detectKonamiSequence('ArrowRight');
  detectKonamiSequence('a');
  const detected = detectKonamiSequence('b');
  expect(detected).toBe(expected);
});

it('Should NOT receive OK when Konami sequence is NOT detected', () => {
  const expected = 'NOT_OK';
  detectKonamiSequence('ArrowDown');
  detectKonamiSequence('ArrowDown');
  detectKonamiSequence('ArrowUp');
  detectKonamiSequence('ArrowDown');
  detectKonamiSequence('ArrowDown');
  detectKonamiSequence('ArrowLeft');
  const detected = detectKonamiSequence('ArrowRight');
  expect(detected).toBe(expected);
});
