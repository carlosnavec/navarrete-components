/** jest  */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link from '../Link'


describe('Link component', () => {
  test('renders correctly with given href and children', () => {
    render(<Link href="https://example.com">Example</Link>);
    const linkElement = screen.getByText(/Example/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

//   test('applies correct styles on hover', () => {
//     render(<Link href="https://example.com">Example1</Link>);
//     const linkElement = screen.getByText('Example1');
//     console.log(linkElement);
//     // Simulate hover
//     linkElement.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    
//     expect(linkElement).toHaveStyle({color: '#b6334d'});
//     expect(linkElement).toHaveStyle('transform: scale(1.1)');
//   });

//   test('applies correct styles on active', () => {
//     render(<Link href="https://example.com">Example2</Link>);
//     const linkElement = screen.getByText('Example2');
    
//     // Simulate active
//     linkElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    
//     expect(linkElement).toHaveStyle('color: #6f1d2e');
//   });

//   test('applies correct styles on visited', () => {
//     render(<Link href="https://example.com">Example3</Link>);
//     const linkElement = screen.getByText('Example3');
    
//     // Simulate visited
//     linkElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    
//     expect(linkElement).toHaveStyle('color: #c7082f');
//   });
});