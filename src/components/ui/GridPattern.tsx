import React from 'react';
import { cn } from '@/lib/utils';

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: [number, number][];
  className?: string;
}

const GridPattern: React.FC<GridPatternProps> = ({ 
  squares = [], 
  className = '',
  width = 40,
  height = 40,
  x = -1,
  y = -1,
}) => {
  // Base cell size and grid dimensions
  const cell = 16; // px per grid cell
  const cols = 36;
  const rows = 24;

  // Render small dots for the grid
  const dots = [];
  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    for (let colIdx = 0; colIdx < cols; colIdx++) {
      dots.push(
        <rect 
          key={`dot-${colIdx}-${rowIdx}`} 
          x={colIdx * cell} 
          y={rowIdx * cell} 
          width={2} 
          height={2} 
          rx={1} 
          fill="currentColor" 
          opacity={0.06} 
        />
      );
    }
  }

  // Render larger square blocks from `squares` prop
  const blocks = squares.map(([sx, sy], i) => (
    <rect 
      key={`blk-${i}`} 
      x={sx * cell} 
      y={sy * cell} 
      width={cell * 4} 
      height={cell * 4} 
      rx={8} 
      fill="currentColor" 
      opacity={0.08} 
    />
  ));

  // Calculate viewBox size
  const viewBoxWidth = cols * cell;
  const viewBoxHeight = rows * cell;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn('pointer-events-none absolute inset-0 w-full h-full text-accent', className)}
      aria-hidden="true"
    >
      <g>
        {dots}
        {blocks}
      </g>
    </svg>
  );
};

export default GridPattern;
