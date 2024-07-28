import React from 'react';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Link: React.FC<LinkProps> = ({ children, href, className }) => {
  return (
    <a href={href} className={className} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
};

export default Link;
