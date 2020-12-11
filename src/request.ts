import fetch from 'node-fetch'

import { BrasilAPIError } from './error'

export class Request {
  request: any

  constructor() {}

  public async makeApiRequest<Response>(uri: string): Promise<Response> {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/${uri}`)

      if (!response.ok) {
        throw response
      }

      return await response.json()
    } catch (error) {
      const data = await error.json()
      switch (error.status) {
        case 400:
        case 404:
        case 500:
          throw new BrasilAPIError(error, data)
        default:
          throw error
      }
    }
  }
}
