export default function formatNumber(value: number): string {
  // Nine Zeroes for Billions
  return Math.abs(value) >= 1.0e+9

    ? (Math.abs(value) / 1.0e+9).toFixed(2) + 'B'
    // Six Zeroes for Millions
    : Math.abs(value) >= 1.0e+6

    ? (Math.abs(value) / 1.0e+6).toFixed(2) + 'M'
    // Three Zeroes for Thousands
    : Math.abs(value) >= 1.0e+3

    ? (Math.abs(value) / 1.0e+3).toFixed(2) + 'K'

    : Math.abs(value).toString();
}
