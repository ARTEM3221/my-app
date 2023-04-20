import React from 'react';
import Transaction from '.';
import {shallow} from 'enzyme';

describe('Transaction component', () => {
    it('should sgow transaction', () => {
        const sut = shallow(<Transaction/>)
        expect(sut).toMatchSnapshot();
    })
})