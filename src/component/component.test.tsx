import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Component } from './component'

describe("Running test for 'Component'", () => {
  test("Check 'Component' children", () => {
    render(<Component>Child</Component>)
    const child = screen.getByText(/Child/)
    expect(child).toBeInTheDocument()
  })
})
