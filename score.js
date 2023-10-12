export { scoreFrame }

function scoreFrame(frame, frame2) {
  if (frame[0] === 10) {
    return frame[0] + frame2.reduce((a, b) => a + b)
  }
  if (frame[0] + frame[1] === 10) {
    return frame.reduce((a, b) => a + b) + frame2[0]
  } else return frame[0] + frame[1]
}
