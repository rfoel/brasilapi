type ServiceError = {
  name: string
  message: string
  service: string
}

export class BrasilAPIError {
  errors: ServiceError[]
  name: string
  message: string
  status: number
  statusText: string
  type: string

  constructor(error: Response, data: any) {
    this.errors = data.errors
    this.name = data.name
    this.message = data.message
    this.type = data.type
    this.status = error.status
    this.statusText = error.statusText
  }
}
