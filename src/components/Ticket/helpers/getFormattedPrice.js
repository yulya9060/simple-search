// @flow

const getFormattedPrice = (price: number): string => {
  const formattedPrice = price.toLocaleString('ru-RU')

  return `${formattedPrice} Р`
}

export default getFormattedPrice
