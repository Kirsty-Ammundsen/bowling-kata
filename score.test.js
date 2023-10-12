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

test('scores a double strike frame', () => {
  const frame = [10, 0]
  const frame2 = [10, 0]
  const frame3 = [7, 1]
  const expected = 27
  const actual = score.scoreFrame(frame, frame2, frame3)
  expect(actual).toBe(expected)
})

test('scores a simple game', () => {
  const game = [
    [2, 0],
    [4, 2],
    [6, 0],
    [2, 4],
    [1, 5],
    [7, 0],
    [5, 2],
    [7, 0],
    [2, 6],
    [8, 1],
  ]
  const expected = 64
  const actual = score.gameTotal(game)
  expect(actual).toBe(expected)
})

test('scores a game with spares', () => {
  const game = [
    [6, 1],
    [4, 0],
    [6, 4],
    [2, 7],
    [3, 5],
    [5, 0],
    [5, 5],
    [0, 0],
    [1, 6],
    [7, 2],
  ]
  const expected = 71
  const actual = score.gameTotal(game)
  expect(actual).toBe(expected)
})

test('scores a game with spares and strikes', () => {
  const game = [
    [6, 4],
    [8, 0],
    [10, 0],
    [2, 7],
    [5, 5],
    [4, 0],
    [10, 0],
    [2, 1],
    [2, 6],
    [4, 4],
  ]
  const expected = 104
  const actual = score.gameTotal(game)
  expect(actual).toBe(expected)
})

test('scores a game with double strike and spares', () => {
  const game = [
    [1, 2],
    [6, 4],
    [5, 4],
    [10, 0],
    [7, 2],
    [10, 0],
    [10, 0],
    [5, 2],
    [7, 0],
    [4, 4],
  ]
  const expected = 119
  const actual = score.gameTotal(game)
  expect(actual).toBe(expected)
})

test('scores a perfect game', () => {
  const game = [
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 10, 10],
  ]
  const expected = 300
  const actual = score.gameTotal(game)
  expect(actual).toBe(expected)
})
