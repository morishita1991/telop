import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const ShadowDistanceRangeBarContext = createContext<ValueType>({} as ValueType);

export const ShadowDistanceRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <ShadowDistanceRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </ShadowDistanceRangeBarContext.Provider>
  );
};
