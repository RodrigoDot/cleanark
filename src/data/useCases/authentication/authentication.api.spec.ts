import { AuthenticationApi } from './authentication.api'
import { HttpPostClientSpy } from '../../mocks/http/mock-http-post-client'

type WrapperTypes = {
  wrapper: AuthenticationApi
  httpPostClientSpy: HttpPostClientSpy
}

const createWrapper = (url = 'any_url'): WrapperTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const wrapper = new AuthenticationApi(url, httpPostClientSpy)

  return {
    wrapper,
    httpPostClientSpy
  }
}

describe('Authentication', () => {
  it('Should call HttpPostClient using the exact url', async () => {
    const url = 'any_url'
    const { wrapper, httpPostClientSpy } = createWrapper()
    await wrapper.auth() 

    expect(httpPostClientSpy.url).toBe(url)
  })
})
