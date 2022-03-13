import { render, screen } from '@testing-library/react'
import RequestForm from '.'

describe('RequestForm', () => {
  it('should render', () => {
    render(
      <RequestForm setRepos={() => jest.fn()} />
    )

    expect(true).toBe(true)
  })
})
