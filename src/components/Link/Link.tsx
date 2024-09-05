// Link.tsx
import React from 'react';
import './Link.scss';

export interface LinkProps {
  href: string;
  children?: React.ReactNode ;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
    children = children || 'Ver Detalle';
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;