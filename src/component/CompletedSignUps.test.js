import { render, screen } from '@testing-library/react'
import CompletedSignUps from './CompletedSignUps'

test('renders CompletedSignUps properly', () => {
  render(<CompletedSignUps />)
  // const linkElement = screen.getByText(/Sign-ups completed/i)
  // expect(linkElement).toBeInTheDocument()
})
