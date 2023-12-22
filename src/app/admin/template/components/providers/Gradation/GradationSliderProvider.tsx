import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const GradationSliderContext = createContext<ValueType>({} as ValueType);

export const GradationSliderProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(0.5);
  return (
    <GradationSliderContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </GradationSliderContext.Provider>
  );
};
