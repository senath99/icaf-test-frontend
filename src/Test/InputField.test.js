/**
 * @jest-environment jsdom
 */

import React from 'react';
import InputField from '../Commons/InputField';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'

configure({ adapter: new Adapter() });

test('message box', () => {
    console.log("Start")
})

test('Should todo component', () => {
    render(<InputField />)
    const element = screen.getByTestId('editor')
    expect(element).toBeInTheDocument();
})

describe('Input field component', () => {
    it('starts with 0', () => {
        const Shallowwrapper = shallow(<InputField />)
        console.log('Shallow HTML', Shallowwrapper.debug())

    })
})
