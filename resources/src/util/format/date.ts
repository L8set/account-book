export function splitDateTime(date: Date) {
  const yyyy = () => date.getFullYear().toString()
  const M = () => (date.getMonth() + 1).toString()
  const d = () => date.getDate.toString()
  return {
    get yyyy(): string {
      return yyyy()
    },
    get M(): string {
      return M()
    },
    get MM(): string {
      return M().padStart(2, '0')
    },
    get d(): string {
      return d()
    },
    get dd(): string {
      return d().padStart(2, '0')
    },
  }
}

export function formatDateToYyyyMMdd(date: Date): string {
  const d = splitDateTime(date)
  return `${d.yyyy}/${d.MM}/${d.dd}`
}
