export function formatNumberToCurrency(num: number): string {
  return num.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })
}
