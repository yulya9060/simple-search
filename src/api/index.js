// @flow

const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets'
const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search'

const fetchTickets = async (searchId: string) => {
  const response = await fetch(`${TICKETS_URL}?searchId=${searchId}`)
  const result = await response.json()

  return result
}

const fetchSearchId = async () => {
  const response = await fetch(SEARCH_ID_URL)
  const result = await response.json()

  return result
}


export {
  fetchTickets,
  fetchSearchId,
}
