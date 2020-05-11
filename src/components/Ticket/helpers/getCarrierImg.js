// @flow

const CARRIER_IMG_URL = 'https://pics.avs.io/99/36/'

type TArgs = {
  iataCode: string,
  isRetina?: boolean,
}

const getCarrierImg = ({ iataCode, isRetina = false }: TArgs): string => {
  if (isRetina) {
    return `${CARRIER_IMG_URL}${iataCode}@2x.png`
  }

  return `${CARRIER_IMG_URL}${iataCode}.png`
}

export default getCarrierImg
