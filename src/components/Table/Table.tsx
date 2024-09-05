// Table.tsx
import React from 'react';
import './Table.scss';
import Link from '../Link/Link';

export interface TableProps {
  headers: string[];
  data: Array<Array<string | number | React.ReactNode>>;
  onContentCellClick?: (name: string) => void;
}

const Table: React.FC<TableProps> = ({ headers, data, onContentCellClick }) => {
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const handleCellClick = (cell: string | number | React.ReactNode) => {
    if (typeof cell === 'string' && onContentCellClick) {
      onContentCellClick(cell);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              
              const isLink = typeof cell === 'string' && cell.includes('https://');
              const contentCell = isLink?<Link href={cell}/>:cell;

              return (<td key={cellIndex} onClick={() => handleCellClick(cell)}>
                 {contentCell} 
                </td>
                );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;