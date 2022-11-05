import demo from '../app';

test('Demo', () => {
  const received = 'test';
  expect(demo('test')).toBe(received);
});
