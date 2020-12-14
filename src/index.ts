import { Bank, CEP } from './models'
import { Request } from './request'

export * from './models'

export class BrasilAPI {
  private readonly request: Request

  constructor() {
    this.request = new Request()
  }

  async banks(): Promise<Bank[]>
  async banks(code: string | number): Promise<Bank>
  async banks(code?: string | number): Promise<Bank[] | Bank> {
    if (code) {
      return await this.request.makeApiRequest<Bank>(`banks/v1/${code}`)
    }
    return await this.request.makeApiRequest<Bank[]>('banks/v1')
  }

  async cep(cep: string): Promise<CEP> {
    return await this.request.makeApiRequest<CEP>(`cep/v1/${cep}`)
  }
}
