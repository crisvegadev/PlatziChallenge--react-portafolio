const useNumbersToHuman = () => {
  const numberToHuman = (number: number) => {
    const numberToHuman = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumSignificantDigits: 4
    }).format(number)
    return numberToHuman
  }

  return { numberToHuman }
}

export default useNumbersToHuman
