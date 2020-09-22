import { AuthenticationApi } from './authentication.api'
import { HttpPostClient } from 'data/interfaces/http/http-post-client'

describe('Authentication', () => {
  it('Should call HttpPostClient using the exact url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const wrapper = new AuthenticationApi(url, httpPostClientSpy)
    await wrapper.auth() 

    expect(httpPostClientSpy.url).toBe(url)
  })
})