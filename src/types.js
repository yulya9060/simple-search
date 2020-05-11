// @flow

type TStops = string[]

export type TSegment = {
  origin: string,
  destination: string,
  date: string,
  duration: number,
  stops: TStops,
}

type TSegments = TSegment[]

export type TTicket = {
  price: number,
  carrier: string,
  segments: TSegments,
}

export type TTickets = TTicket[]

export type TFilters = {
  [string]: string,
}

export type TSorts = {
  key: string,
}
