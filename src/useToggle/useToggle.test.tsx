import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './useToggle';

test('should use toggler', () => {
  const { result } = renderHook(() => useToggle(true));

  let [value, toggleValue] = result.current;
  expect(value).toBe(true);
  expect(typeof toggleValue).toBe('function');
});

test('should toggle values', () => {
  const { result } = renderHook(() => useToggle(true));
  let [value, toggleValue] = result.current;

  act(() => {
    toggleValue();
  });
  [value] = result.current;
  expect(value).toBe(false);
});
