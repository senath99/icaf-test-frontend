/**
 * @jest-environment jsdom
 */

import React from 'react';
import PostList from '../component/Program/PostList'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });


afterEach(() => {
    cleanup()
})

test('message box', () => {
    console.log("Important Dates")
})

test('test 06', () => {
    render(<PostList />)
    const element = screen.getByTestId('postlist')
    expect(element).toContainHTML('<Col>')
})

test('test 07', () => {
    const tree = renderer.create(<PostList />).toJSON()
    console.log(tree)
})
