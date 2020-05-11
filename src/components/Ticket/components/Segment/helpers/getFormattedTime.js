// @flow

import moment from 'moment'

const getFormattedMinutes = (date: Date) => {
  const formattedMinute = String(moment(date).minutes())

  if (formattedMinute.length < 2) {
    return formattedMinute.padStart(2, '0')
  }

  return formattedMinute
}

const getFormattedHours = (date: Date) => {
  const formattedHours = String(moment(date).hours())

  if (formattedHours.length < 2) {
    return formattedHours.padStart(2, '0')
  }

  return formattedHours
}

const getFormattedArrivalTime = (departureTime: Date, duration: number) => (
  moment(departureTime).add(duration, 'minutes')
)

const getFormattedTime = (date: string, duration: number): string => {
  const formattedDepartureTime = moment(date)
  const formattedArrivalTime = getFormattedArrivalTime(formattedDepartureTime, duration)

  const departureMinute = getFormattedMinutes(formattedDepartureTime)
  const departureHours = getFormattedHours(formattedDepartureTime)
  const departureTime = `${departureHours}:${departureMinute}`

  const arrivalMinute = getFormattedMinutes(formattedArrivalTime)
  const arrivalHours = getFormattedHours(formattedArrivalTime)
  const arrivalTime = `${arrivalHours}:${arrivalMinute}`

  return `${departureTime} - ${arrivalTime}`
}

export default getFormattedTime
