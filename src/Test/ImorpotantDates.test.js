/**
 * @jest-environment jsdom
 */

import React from 'react';
import ImportantDates from '../component/ImportantDates/ImportantDates';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'

configure({ adapter: new Adapter() });

test('message box', () => {
    console.log("Important Dates")
})

test('Should todo component', () => {
    render(<ImportantDates />)
    const element = screen.getByTestId('dates')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('01st January 2021')
})

describe('Input field component', () => {
    it('starts with 0', () => {
        const Shallowwrapper = shallow(<ImportantDates />)
        console.log('Shallow HTML', Shallowwrapper.debug())

    })
})