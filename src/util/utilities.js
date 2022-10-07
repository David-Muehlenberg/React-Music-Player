export function secondsToDecimalTime(time) {
  const cleanTime = Math.floor(time);
  const minutes = Math.floor(cleanTime / 60);
  const seconds = cleanTime % 60;
// modulus
  return `${minutes}:${seconds}`;
}
