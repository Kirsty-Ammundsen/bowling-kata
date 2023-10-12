export { scoreFrame, gameTotal }

function scoreFrame(frame, frame2, frame3) {
  // double strike
  if (frame[0] === 10 && frame2[0] === 10) {
    return frame[0] + frame2[0] + frame3.reduce((a, b) => a + b)
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
  else return frame.reduce((a, b) => a + b)
}

function gameTotal(game) {
  let totals = 0
  for (let i = 0; i < game.length; i++) {
    totals += scoreFrame(game[i], game[i + 1], game[i + 2])
  }

  return totals
}
