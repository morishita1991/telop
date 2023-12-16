import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const StrokeOpacityRangeBarContext = createContext<ValueType>({} as ValueType);

export const StrokeOpacityRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(1);
  return (
    <StrokeOpacityRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </StrokeOpacityRangeBarContext.Provider>
  );
};
