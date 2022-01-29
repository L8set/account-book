export const splitDateTime = (date: Date) => {
  const yyyy = () => date.getFullYear().toString()
  const M = () => (date.getMonth() + 1).toString()
  const d = () => date.getDate.toString()
  return {
    get yyyy() {
      return yyyy()
    },
    get M() {
      return M()
    },
    get MM() {
      return M().padStart(2, '0')
    },
    get d() {
      return d()
    },
    get dd() {
      return d().padStart(2, '0')
    },
  }
}

export const formatDateToYyyyMMdd = (date: Date) => {
  const d = splitDateTime(date)
  return `${d.yyyy}/${d.MM}/${d.dd}`
}
