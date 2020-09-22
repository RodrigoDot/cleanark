import { HttpPostClient } from 'data/interfaces/http/http-post-client'

export class AuthenticationApi {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.HttpPostClient.post(this.url)
  }
}