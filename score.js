export { scoreFrame, gameTotal }

const game1 = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [3, 7, 10],
]

gameTotal(game1)

function scoreFrame(frame, frame2, frame3) {
  // last round is 3 scores
  if (frame[2] < 11) {
    return frame.reduce((a, b) => a + b)
  }
  // second to last game strike
  if (frame[0] === 10 && frame2[0] === 10 && frame2[1] === 10) {
    return frame[0] + frame2[0] + frame2[1]
  }
  // double strike
  if (frame[0] === 10 && frame2[0] === 10) {
    return frame[0] + frame2[0] + frame3[0]
  }
  // single strike
  if (frame[0] === 10) {
    return frame[0] + frame2.reduce((a, b) => a + b)
  }
  // spare
  if (frame[0] + frame[1] === 10) {
    return frame.reduce((a, b) => a + b) + frame2[0]
  }
  // normal sum
  return frame.reduce((a, b) => a + b)
}

function gameTotal(game) {
  let totals = 0
  for (let i = 0; i < game.length; i++) {
    totals += scoreFrame(game[i], game[i + 1], game[i + 2])
  }
  console.log('Final score: ' + totals)
  return totals
}
