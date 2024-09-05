/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../Table';

describe('Table component', () => {
  const header = [
    'Name', 
    'Age',
    'Email',
  ];

  const data = [
    ['John Doe',  28,  'john@example.com'] ,
     ['Jane Smith',  34, 'jane@example.com'] ,
  ];

  test('renders correctly with given columns and data', () => {
    render(<Table headers={header} data={data} onContentCellClick={() => {}} />);
    header.forEach(column => {
      expect(screen.getByText(column)).toBeInTheDocument();
    });
    data.forEach(row => {
      expect(screen.getByText(row[0])).toBeInTheDocument();
      expect(screen.getByText(row[1])).toBeInTheDocument();
      expect(screen.getByText(row[2])).toBeInTheDocument();
    });
  });

  test('renders empty state when no data is provided', () => {
    render(<Table headers={header} data={[]} onContentCellClick={() => {}} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

});