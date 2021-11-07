import { renderHook, act } from '@testing-library/react-hooks'
import { useToggle } from './useToggle';

test('should use toggler', () => {
  const { result } = renderHook(() => useToggle(true))

  expect(result.current.value).toBe(true)
  expect(typeof result.current.toggleValue).toBe('function')
})

test('should toggle values', () => {
    const { result } = renderHook(() => useToggle(true))
  
    act(() => {
      result.current.toggleValue()
    })
  
    expect(result.current.value).toBe(false)
  })