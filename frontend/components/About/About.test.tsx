import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About component', () => {
  test('renders without errors', async () => {
    render(<About />);

    expect(screen.getAllByText(/Introduction/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Education/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Work/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Interests/i)[0]).toBeInTheDocument();
  });


  test('scrolls to Education section on button click', async () => {
    render(<About />);

    // Wait for the component to fetch data
    await screen.findByText(/Introduction content/i);

    // Mock the scrollIntoView function
    Element.prototype.scrollIntoView = jest.fn();

    // Click the button
    fireEvent.click(screen.getByText(/Scroll down to Education/i));

    // Check that the scrollIntoView function was called
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

});
