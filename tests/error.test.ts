import * as nock from 'nock'
import { BrasilAPI } from '../src'
import { BrasilAPIError } from '../src/error'

const scope = nock('https://brasilapi.com.br/api/')

let brasilapi: BrasilAPI

beforeEach(() => {
  brasilapi = new BrasilAPI()
})

it('should throw bad request error', async () => {
  scope.get('/cep/v1/000').query(true).reply(404, {
    status: 400,
    statusText: 'Bad Request',
  })
  try {
    await brasilapi.cep('000')
  } catch (error) {
    expect(error).toEqual(new BrasilAPIError(error, {}))
  }
})
