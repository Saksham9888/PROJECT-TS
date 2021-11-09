import React from 'react';
import SignUp from '../SignUp';
import DashBoard from '../DashBoard'
import { screen, render, fireEvent } from '@testing-library/react'

describe('SignUp Test', () => {
    it('Should render text', () => {
        render(<SignUp />);
        expect(
            screen.getByRole('heading', { name: /Sign Up/i })
        ).toBeInTheDocument();
    })
    // test('should show login form', () => {
    //     render(<SignUp />)
    //     const input = screen.getByTestId('firstName')
    //     fireEvent.change(input, { target: { value: 'name' } })
    //     expect(input.target.value).toBe('name')
    // })
    it('Should render text', () => {
        render(<SignUp />);
        expect(
            screen.getByRole('checkbox')
        ).toBeInTheDocument();
    })
    it( 'Should render text', () => {
        render( <SignUp /> );
        fireEvent.click(
        screen.getByRole( 'button', {
        name: /Sign Up/i,
        } )
        );
        expect(
        screen.getByRole( 'link', { name: /signin/i } )
        ).toBeInTheDocument();
        } );
}
)
