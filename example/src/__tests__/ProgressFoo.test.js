import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProgressFoo from '../ProgressFoo'

test('render ProgressFoo', async () => {
    render(
        // tag::basic[] 
        <ProgressFoo now="20" />
        // end::basic[] 
    )

    expect(screen.getByText('20')).toBeInTheDocument()
})