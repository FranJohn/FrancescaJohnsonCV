/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Navigation from './Navigation';

/**
 * Test suite for the Navigation component.
 */
describe('Navigation Component', () => {
  const title = 'Test Navigation';
  const pages = ['Home', 'About', 'Services'];

  /**
   * Test case to check if the navigation component renders
   * with correct title, links, and dropdown items.
   */
  test('renders navigation component with correct title, links, and dropdown items', async () => {
    const { getByTestId, getAllByText } = render(<Navigation title={title} pages={pages} />);
    
    await waitFor(() => {
      pages.forEach((page) => {
        // Check navigation links
        const navLinks = getAllByText(page);
        navLinks.forEach((link) => {
          expect(link).toBeInTheDocument();
          expect(getByTestId(`nav-link-${page.toLowerCase().replace(' ', '-')}`)).toBeInTheDocument();
        });

        // Check dropdown items
        const dropdownItems = getAllByText(page);
        dropdownItems.forEach((item) => {
          expect(item).toBeInTheDocument();
        });
      });
    });
  });

  /**
   * Test case to check if the dropdown is closed by default.
   */
  test('dropdown is closed by default', () => {
    const { queryByTestId } = render(<Navigation title={title} pages={pages} />);
    expect(queryByTestId('hamburger')).toBeInTheDocument();
    const dropdown = queryByTestId('dropdown');
    expect(dropdown).not.toHaveClass('active');
  });

  /**
   * Test case to check if the dropdown opens and closes
   * on hamburger click.
   */
  test('dropdown opens and closes on hamburger click', () => {
    const { getByTestId } = render(<Navigation title={title} pages={pages} />);
    const hamburger = getByTestId('hamburger');
    const dropdown = getByTestId('dropdown');

    // Initially, the dropdown should be closed
    expect(dropdown).not.toHaveClass('active');

    // Click on the hamburger to open the dropdown
    fireEvent.click(hamburger);
    expect(dropdown).toHaveClass('active');

    // Click on the hamburger again to close the dropdown
    fireEvent.click(hamburger);
    expect(dropdown).not.toHaveClass('active');
  });
});
