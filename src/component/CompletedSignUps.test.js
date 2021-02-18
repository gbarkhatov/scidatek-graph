import { render, fireEvent } from '@testing-library/react'
import CompletedSignUps from './CompletedSignUps'

test('CompletedSignUps changes dropdown properly', () => {
  const { getByTestId, getAllByTestId } = render(<CompletedSignUps />)
  fireEvent.change(getByTestId('select'), { target: { value: 2 } })

  let options = getAllByTestId('select-option')
  expect(options[0].selected).toBeFalsy()
  expect(options[1].selected).toBeFalsy()
  expect(options[2].selected).toBeTruthy()
})
