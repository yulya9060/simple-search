// @flow

const getDurationWithUnit = (duration: number, unit: string) => {
  if (duration) {
    return `${duration}${unit}`
  }

  return null
}


const getFormattedDuration = (duration: number): string => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  const formattedHours = getDurationWithUnit(hours, 'ч')
  const formattedMinutes = getDurationWithUnit(minutes, 'м')

  return [formattedHours, formattedMinutes].filter((item) => item).join(' ')
}

export default getFormattedDuration
