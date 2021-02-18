import { render, screen } from '@testing-library/react'
import App from './App'

test('renders CompletedSignUps properly', () => {
  render(<App />)
  const linkElement = screen.getByText(/Sign-ups completed/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders NodeMapView properly', () => {
  render(<App />)
  const linkElement = screen.getByText(/Flow dropout per step and service/i)
  expect(linkElement).toBeInTheDocument()
})
