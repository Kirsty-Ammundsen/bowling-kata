import { test, expect } from 'vitest'
import * as score from './score'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame = [4, 6]
  const frame2 = [5, 7]
  const expected = 15
  const actual = score.scoreFrame(frame, frame2)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const frame2 = [4, 5]
  const expected = 19
  const actual = score.scoreFrame(frame, frame2)
  expect(actual).toBe(expected)
})
