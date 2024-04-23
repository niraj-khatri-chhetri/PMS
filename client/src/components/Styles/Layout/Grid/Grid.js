import React from 'react';
export const Grid = ({ children, gap, margin }) => {
  return <div className={`grid gap-4 m-4 sm:grid-cols-12`}>{children}</div>;
};

export const GridItem = ({ children, span, color }) => {
  return (
    <div
      className={`min-h-[100px] rounded bg-teal-500 shadow-xl sm:col-span-${span}`}
    >
      {children}
    </div>
  );
};
