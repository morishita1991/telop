import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const GradationAngleRangeBarContext = createContext<ValueType>({} as ValueType);

export const GradationAngleRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <GradationAngleRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </GradationAngleRangeBarContext.Provider>
  );
};
