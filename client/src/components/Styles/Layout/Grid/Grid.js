import React from 'react';
export const Grid = ({ children, gap, margin }) => {
  return (
    <div className={`grid ${gap} bg-slate-300 ${margin.auto} grid-cols-12`}>
      {children}
    </div>
  );
};

export const GridItem = ({ children, span, color }) => {
  console.log('🚀 ~ GridItem ~ span:', span);
  return (
    <div
      className={`min-h-[100px] rounded ${color} shadow-xl sm:col-span-${span}`}
    >
      {children}
    </div>
  );
};
