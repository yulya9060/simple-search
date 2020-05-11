// @flow

const TRANSFER_TEXT = 'пересад'

const getTransferMessage = (
  transfersLength: number,
  end: string,
) => `${transfersLength} ${TRANSFER_TEXT}${end}`

const getTransfersCount = (transfersLength: number): string => {
  switch (true) {
    case transfersLength === 1:
      return getTransferMessage(transfersLength, 'ка')
    case transfersLength < 5 && transfersLength > 1:
      return getTransferMessage(transfersLength, 'ки')
    case transfersLength < 20 && transfersLength > 1:
      return getTransferMessage(transfersLength, 'ок')
    default:
      return 'Нет пересадок'
  }
}

export default getTransfersCount
