/**
 * @jest-environment jsdom
 */

import React from 'react';
import Contact from '../component/Contact/Contact'
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'


test('test 10', () => {
    render(<Contact />)
    const element = screen.getByTestId("contact")
    expect(element).toHaveTextContent('Contact Us')

})

test('test 11', () => {
    render(<Contact />)
    const element = screen.getByTestId("contact-1")
    expect(element).toContainHTML('<Col>')

})