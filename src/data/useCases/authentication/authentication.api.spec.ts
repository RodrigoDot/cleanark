import { AuthenticationApi } from './authentication.api'
import { HttpPostClientSpy } from '../../mocks/http/mock-http-post-client'

describe('Authentication', () => {
  it('Should call HttpPostClient using the exact url', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const wrapper = new AuthenticationApi(url, httpPostClientSpy)
    await wrapper.auth() 

    expect(httpPostClientSpy.url).toBe(url)
  })
})
