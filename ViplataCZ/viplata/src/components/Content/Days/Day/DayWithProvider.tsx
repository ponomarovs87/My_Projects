// DayWithProvider.tsx
import React from "react";
import { DayProvider } from "./DayProvider";
import { Day } from "./Day";

interface DayWithProviderProps {
  date: Date;
}

export const DayWithProvider: React.FC<DayWithProviderProps> = ({ date }) => {
  return (
    <DayProvider date={date}>
      <Day />
    </DayProvider>
  );
};
