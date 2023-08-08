import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('This header must have no bugs!', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /🐧🐙🐐🐸🍟😃👽🍄🍎🐛🔒🍕🌵/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
