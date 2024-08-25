import Counter from "../Components/Counter";
import {render, screen} from '@testing-library/react'

test('Initial State Check',()=>{
    render(<Counter/>);
    // check initially "Counter : 0" text is there  or not.
    const counterText = screen.getByText('Counter : 0');
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(counterText).toBeInTheDocument();
})