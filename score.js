export { scoreFrame, gameTotal }

const game1 = [
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

gameTotal(game1)

function scoreFrame(frame, frame2, frame3) {
  // double strike
  if (frame[0] === 10 && frame2[0] === 10) {
    console.log('double strike ')
    return frame[0] + frame2[0] + frame3.reduce((a, b) => a + b)
  }
  // single strike
  if (frame[0] === 10) {
    console.log('single strike ')

    return frame[0] + frame2.reduce((a, b) => a + b)
  }
  // spare
  if (frame[0] + frame[1] === 10) {
    console.log('spare ')
    return frame.reduce((a, b) => a + b) + frame2[0]
  }

  // normal sum
  else console.log('normal ')
  return frame.reduce((a, b) => a + b)
}

function gameTotal(game) {
  let totals = 0
  for (let i = 0; i < game.length; i++) {
    totals += scoreFrame(game[i], game[i + 1], game[i + 2])
    console.log(totals)
  }

  console.log(totals)

  return totals
}
