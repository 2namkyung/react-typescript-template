import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Counter from './Counter'

describe('<Counter/>', ()=>{
    it('matches snapshot', ()=>{
        const utils = render(<Counter/>)
        expect(utils.container).toMatchSnapshot()
    })

    it('has a number and two buttons', ()=>{
        const utils = render(<Counter/>)
        utils.getByText('0')
        utils.getByText('+1')
        utils.getByText('-1')
    })

    it('increases', ()=>{
        const utils = render(<Counter/>)
        const number = utils.getByText('0')
        const plusButton = utils.getByText('+1')

        fireEvent.click(plusButton)
        fireEvent.click(plusButton)
        expect(number).toHaveTextContent('2')
    })
})