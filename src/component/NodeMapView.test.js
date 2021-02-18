import { render, fireEvent } from '@testing-library/react'
import NodeMapView from './NodeMapView'

test('NodeMapView changes dropdown properly', () => {
  const { getByTestId, getAllByTestId } = render(<NodeMapView />)
  fireEvent.change(getByTestId('select'), { target: { value: 1 } })

  let options = getAllByTestId('select-option')
  expect(options[0].selected).toBeFalsy()
  expect(options[1].selected).toBeTruthy()

  fireEvent.change(getByTestId('select'), { target: { value: 0 } })

  expect(options[0].selected).toBeTruthy()
  expect(options[1].selected).toBeFalsy()
})
