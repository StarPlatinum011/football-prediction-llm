"use client";
import { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DateRow() {
  const today = new Date();
  
  // Responsive visible count
  const [visibleCount, setVisibleCount] = useState(5);
  
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 436 ? 3 : 5);
    };
    
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);
  
  const centerIndex = Math.floor(visibleCount / 2);
  
  // Generate a wider range (60 days total: 30 before, 30 after), loop through today +- i-30
  const totalRange = Array.from({ length: 60 }, (_, i) => addDays(today, i - 30));
  
  // Start with today in the middle (adjust for mobile/desktop)
  // the index of today will be 30 so we - centerIndex to get the starting point
  const [startIndex, setStartIndex] = useState(30 - centerIndex);

  const visibleDates = totalRange.slice(startIndex, startIndex + visibleCount);
  
  // Selected date is always the one in the center
//   const selectedDate = visibleDates[centerIndex];

  const displayFormat = (d: Date) =>
    d.toDateString() === today.toDateString()
      ? "Today"
      : format(d, "MMM dd");

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < totalRange.length - visibleCount;

  return (
    <div className="flex items-center gap-1.5 lg:gap-4">
      {/* Previous Button */}
      <button
        onClick={() => setStartIndex(i => Math.max(0, i - 1))}
        disabled={!canGoPrev}
        className="shrink-0 cursor-pointer flex items-center justify-center w-16 h-8 lg:w-20 lg:h-8 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous day"
      >
        <ChevronLeft className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
      </button>

      {/* Date Pills Container */}
      <div className="flex gap-1.5 lg:gap-4 flex-1 justify-center">
        {visibleDates.map((d, i) => {
          const isCenter = i === centerIndex;

          return (
            <button
              // startIndex is the first value in the window and i will be spread with the length of that window. [0, 1, 2, 3, 4] like an index
              key={startIndex + i}
              onClick={() => {
                // Calculate how many steps to shift to make this date center
                const shift = i - centerIndex;
                setStartIndex(prev => 
                  Math.max(0, Math.min(totalRange.length - visibleCount, prev + shift))
                );
              }}
               className={`
                relative  w-16 h-8 lg:w-20 lg:h-8 rounded-lg font-medium text-xs whitespace-nowrap transition-colors shrink-0 cursor-pointer select-none 
                 sm:text-sm
                ${isCenter
                  ? "bg-accent text-accent-foreground shadow-sm border-2 border-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }
                ${isCenter ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-foreground after:rounded-full sm:after:w-8" : ""}
              `}
            >
              {displayFormat(d)}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() =>
          setStartIndex(i => Math.min(totalRange.length - visibleCount, i + 1))
        }
        disabled={!canGoNext}
        className="shrink-0 flex cursor-pointer items-center justify-center w-14 h-8 lg:w-20 lg:h-8 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next day"
      >
        <ChevronRight className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
      </button>
    </div>
  );
}